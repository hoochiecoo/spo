// CSV data variable (example data)
const tennisMatchStatsCSV = `
Player, Aces, Double Faults, Winners, Unforced Errors
Player 1, 10, 2, 30, 20
Player 2, 5, 3, 25, 15
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

// Component to display tennis match statistics
function TennisStats() {
    const stats = parseCSV(tennisMatchStatsCSV);

    // Creating the elements using React.createElement
    const tableHeaders = headers => headers.map((header, index) =>
        React.createElement('th', { key: index }, header)
    );

    const tableRows = data => data.map((row, index) => {
        const rowCells = Object.values(row).map((value, index) =>
            React.createElement('td', { key: index }, value)
        );
        return React.createElement('tr', { key: index }, rowCells);
    });

    return React.createElement('div', null,
        React.createElement('h2', null, 'Tennis Match Statistics'),
        React.createElement('table', null,
            React.createElement('thead', null,
                React.createElement('tr', null, tableHeaders(Object.keys(stats[0])))
            ),
            React.createElement('tbody', null, tableRows(stats))
        )
    );
}

// Render the TennisStats component into the 'content' container
ReactDOM.render(
    React.createElement(TennisStats, null),
    document.getElementById('Players_csv')
);
