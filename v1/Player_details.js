// CSV data variables
const playerInfoCSV = `
Name, City, Year of birth
Abanshyn Ihor, Kharkiv, 1969
`;

const matchRatioCSV = `
Matches won:lost, Games won:lost
13:10, 44:45
`;

const tournamentsCSV = `
#, Tournament, Position, Wins, Defeats, Ratio of games
1, 11 June 2020, 5, 0, 4, 2:12
2, 10 June 2020, 2, 4, 1, 13:8
3, 02 June 2020, 5, 0, 4, 2:12
4, 31 May 2020, 1, 4, 1, 12:8
5, 28 May 2020, 1, 5, 0, 15:5
`;

const rivalsCSV = `
Rival_name, Rival_data
Fashchevskyi Ivan, Year of birth: 1990
`;

// Function to parse CSV data into an array of objects
function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const data = lines.slice(1).map(line => {
        const values = line.split(',').map(value => value.trim());
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
        }, {});
    });
    return data;
}

// Component for player information
function PlayerInfo() {
    const data = parseCSV(playerInfoCSV)[0]; // Extracting the first (and only) row

    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Player Information'),
            React.createElement('p', null, `Name: ${data.Name}`),
            React.createElement('p', null, `City: ${data.City}`),
            React.createElement('p', null, `Year of birth: ${data['Year of birth']}`)
        )
    );
}

// Component for match ratio
function MatchRatio() {
    const data = parseCSV(matchRatioCSV)[0]; // Extracting the first (and only) row

    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Match and Game Ratio'),
            React.createElement('p', null, `Matches won:lost - ${data['Matches won:lost']}`),
            React.createElement('p', null, `Games won:lost - ${data['Games won:lost']}`)
        )
    );
}

// Component for tournaments table
function Tournaments() {
    const data = parseCSV(tournamentsCSV);

    // Creating table rows
    const tableRows = data.map((tournament, index) => {
        return (
            React.createElement('tr', { key: index },
                React.createElement('td', null, tournament['#']),
                React.createElement('td', null, tournament.Tournament),
                React.createElement('td', null, tournament.Position),
                React.createElement('td', null, tournament.Wins),
                React.createElement('td', null, tournament.Defeats),
                React.createElement('td', null, tournament['Ratio of games'])
            )
        );
    });

    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Table of Tournaments'),
            React.createElement('table', null,
                React.createElement('thead', null,
                    React.createElement('tr', null,
                        React.createElement('th', null, '#'),
                        React.createElement('th', null, 'Tournament'),
                        React.createElement('th', null, 'Position'),
                        React.createElement('th', null, 'Wins'),
                        React.createElement('th', null, 'Defeats'),
                        React.createElement('th', null, 'Ratio of games')
                    )
                ),
                React.createElement('tbody', null, tableRows)
            )
        )
    );
}

// Component for rivals
function Rivals() {
    const data = parseCSV(rivalsCSV);

    // Creating list items for rivals
    const rivalsList = data.map((rival, index) => {
        return (
            React.createElement('div', { key: index },
                React.createElement('h2', null, `Rival: ${rival.Rival_name}`),
                React.createElement('p', null, rival.Rival_data)
            )
        );
    });

    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Rivals'),
            rivalsList
        )
    );
}

// Main App component combining all sections
function App() {
    return (
        React.createElement('div', null,
            React.createElement(PlayerInfo, null),
            React.createElement(MatchRatio, null),
            React.createElement(Tournaments, null),
            React.createElement(Rivals, null)
        )
    );
}

// Render the App component into the 'content' container
ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('Player_details')
);
