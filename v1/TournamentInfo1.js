// Sample CSV data (simulated as JSON for demonstration)
const tournamentData = {
    basicInfo: {
        name: "Sample Tournament",
        date: "June 2024",
        location: "Virtual"
    },
    rules: [
        "Rule 1: Sample rule description",
        "Rule 2: Another sample rule description",
        "Rule 3: One more rule description"
    ],
    players: [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
        { id: 3, name: "Player 3" }
    ],
    addYourselfLink: "https://example.com/add-yourself"
};

// TournamentInfo component displays basic tournament information
function TournamentInfo() {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Basic Info'),
            React.createElement('p', null, 'Tournament Name: ' + tournamentData.basicInfo.name),
            React.createElement('p', null, 'Date: ' + tournamentData.basicInfo.date),
            React.createElement('p', null, 'Location: ' + tournamentData.basicInfo.location)
        )
    );
}

// Rules component displays the rules of the tournament
function Rules() {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Rules'),
            React.createElement('ul', null,
                tournamentData.rules.map((rule, index) =>
                    React.createElement('li', { key: index }, rule)
                )
            )
        )
    );
}

// PlayersList component displays the list of players
function PlayersList() {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'List of Players'),
            React.createElement('ul', null,
                tournamentData.players.map(player =>
                    React.createElement('li', { key: player.id }, player.name)
                )
            )
        )
    );
}

// AddYourselfLink component provides a link to add oneself to the tournament
function AddYourselfLink() {
    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Add Yourself'),
            React.createElement('p', null,
                'Want to participate? ',
                React.createElement('a', { href: tournamentData.addYourselfLink }, 'Click here'),
                ' to add yourself to the tournament!'
            )
        )
    );
}

// Main App component to render all sections
function App() {
    return (
        React.createElement('div', null,
            React.createElement(TournamentInfo),
            React.createElement('hr', null),
            React.createElement(Rules),
            React.createElement('hr', null),
            React.createElement(PlayersList),
            React.createElement('hr', null),
            React.createElement(AddYourselfLink)
        )
    );
}

// Render the App component into the 'content' container
ReactDOM.render(
    React.createElement(App),
    document.getElementById('TournamentInfo1')
);
