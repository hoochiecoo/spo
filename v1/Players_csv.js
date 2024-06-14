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

    return (
        <div>
            <h2>Tennis Match Statistics</h2>
            <table>
                <thead>
                    <tr>
                        {Object.keys(stats[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {stats.map((playerStats, index) => (
                        <tr key={index}>
                            {Object.values(playerStats).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Render the TennisStats component into the 'content' container
ReactDOM.render(
    <TennisStats />,
    document.getElementById('Players_csv')
);
