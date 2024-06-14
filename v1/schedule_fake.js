// Function to generate a random number within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random tournament name
function generateRandomTournamentName() {
    const adjectives = ['Summer', 'Golden', 'Silver', 'Crystal', 'Diamond', 'Royal', 'Grand', 'Spring', 'Autumn'];
    const nouns = ['Cup', 'Championship', 'Trophy', 'Challenge', 'Classic', 'Open', 'Invitational'];

    const adjective = adjectives[getRandomInt(0, adjectives.length - 1)];
    const noun = nouns[getRandomInt(0, nouns.length - 1)];

    return `${adjective} ${noun}`;
}

// Function to generate a random schedule for this week
function generateFakeTournamentSchedule() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const schedule = {};

    // Generate tournaments for each day
    daysOfWeek.forEach(day => {
        let tournaments = [];

        if (day === 'Tuesday') {
            // Special condition for Tuesday
            for (let i = 0; i < 4; i++) {
                tournaments.push({
                    name: generateRandomTournamentName(),
                    type: 'Plays for Money'
                });
            }
        } else if (day === 'Sunday') {
            // Special condition for Sunday
            tournaments.push({
                name: generateRandomTournamentName(),
                type: 'Family Play'
            });
        } else {
            // Default condition for other days
            tournaments.push({
                name: generateRandomTournamentName(),
                type: '1 to 1 Matches'
            });
        }

        schedule[day] = tournaments;
    });

    return schedule;
}

// Component to display tournament schedule
function TournamentSchedule() {
    const schedule = generateFakeTournamentSchedule();

    // Creating elements using React.createElement
    const scheduleList = Object.keys(schedule).map(day => {
        const tournaments = schedule[day].map((tournament, index) =>
            React.createElement('li', { key: index },
                `${tournament.name} - ${tournament.type}`
            )
        );

        return React.createElement('div', { key: day },
            React.createElement('h3', null, day),
            React.createElement('ul', null, tournaments)
        );
    });

    return React.createElement('div', null,
        React.createElement('h2', null, 'Tournament Schedule'),
        scheduleList
    );
}

// Render the TournamentSchedule component into the 'content' container
ReactDOM.render(
    React.createElement(TournamentSchedule, null),
    document.getElementById('schedule_fake')
);
