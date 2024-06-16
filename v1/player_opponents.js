<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSV User Selection</title>
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
</head>
<body>
    <h1>Select User</h1>
    <div id="content"></div>

    <script>
        // Function to fetch and parse CSV data
        async function fetchCSV(url) {
            const response = await fetch(url);
            const data = await response.text();

            // Convert CSV to an array of objects
            const rows = data.split('\n').map(row => row.split(','));
            const headers = rows[0];
            const parsedData = rows.slice(1).map(row => {
                return row.reduce((acc, value, index) => {
                    acc[headers[index]] = value;
                    return acc;
                }, {});
            });

            return parsedData;
        }

        // URLs
        const playerUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR37EwAUP0tDMggeU2hmpXf8k7uEYsNwWz7HWXal8nEFxAFDup4d3anaEDhEFVWHoGA9LkDswckQFvh/pub?gid=659161648&single=true&output=csv';
        const matchesUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR37EwAUP0tDMggeU2hmpXf8k7uEYsNwWz7HWXal8nEFxAFDup4d3anaEDhEFVWHoGA9LkDswckQFvh/pub?gid=1975410338&single=true&output=csv';

        // Define Content component
        class Content extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    players: [],
                    matches: [],
                    selectedUser: '',
                    opponents: [],
                    notPlayedWith: []
                };
                this.handleChange = this.handleChange.bind(this);
            }

            async componentDidMount() {
                const playerData = await fetchCSV(playerUrl);
                const matchesData = await fetchCSV(matchesUrl);
                const players = playerData.map(player => player.Name);
                this.setState({ players, matches: matchesData });
            }

            handleChange(event) {
                const selectedUser = event.target.value;
                const opponents = this.findUserOpponents(selectedUser, this.state.matches);
                const notPlayedWith = this.findNotPlayedWith(selectedUser, this.state.players, opponents);
                this.setState({ selectedUser, opponents, notPlayedWith });
            }

            findUserOpponents(user, matchesData) {
                const opponents = [];
                matchesData.forEach((match) => {
                    if (match.Player1 === user) {
                        opponents.push(match.Player2);
                    }
                    if (match.Player2 === user) {
                        opponents.push(match.Player1);
                    }
                });
                return opponents;
            }

            findNotPlayedWith(user, allPlayers, opponents) {
                return allPlayers.filter(player => player !== user && !opponents.includes(player));
            }

            renderTable(data, title) {
                return React.createElement('table', null,
                    React.createElement('thead', null,
                        React.createElement('tr', null,
                            React.createElement('th', null, title)
                        )
                    ),
                    React.createElement('tbody', null,
                        data.map((item, index) =>
                            React.createElement('tr', { key: index },
                                React.createElement('td', null, item)
                            )
                        )
                    )
                );
            }

            render() {
                return React.createElement('div', null,
                    React.createElement('select', { onChange: this.handleChange },
                        React.createElement('option', { value: '', disabled: true, selected: true }, 'Select a user'),
                        this.state.players.map(player =>
                            React.createElement('option', { key: player, value: player }, player)
                        )
                    ),
                    React.createElement('div', { id: 'opponents' },
                        this.state.selectedUser && this.renderTable(this.state.opponents, `Opponents for user ${this.state.selectedUser}`)
                    ),
                    React.createElement('div', { id: 'not-played-with' },
                        this.state.selectedUser && this.renderTable(this.state.notPlayedWith, 'Not played with')
                    )
                );
            }
        }

        // Render the Content component into the 'content' container
        ReactDOM.render(
            React.createElement(Content),
            document.getElementById('player_opponents')
        );
    </script>
</body>
</html>
