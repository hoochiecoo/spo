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
const favoriteDayTimeUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR37EwAUP0tDMggeU2hmpXf8k7uEYsNwWz7HWXal8nEFxAFDup4d3anaEDhEFVWHoGA9LkDswckQFvh/pub?gid=12828951&single=true&output=csv';

// Define Content component
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            matches: [],
            favoriteDayTimes: [],
            selectedUser: '',
            opponents: [],
            notPlayedWith: [],
            currentUserFavorite: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const playerData = await fetchCSV(playerUrl);
        const matchesData = await fetchCSV(matchesUrl);
        const favoriteDayTimesData = await fetchCSV(favoriteDayTimeUrl);
        const players = playerData.map(player => player.Name);
        this.setState({ players, matches: matchesData, favoriteDayTimes: favoriteDayTimesData });
    }

    handleChange(event) {
        const selectedUser = event.target.value;
        const opponents = this.findUserOpponents(selectedUser, this.state.matches);
        const notPlayedWith = this.findNotPlayedWith(selectedUser, this.state.players, opponents);
        const currentUserFavorite = this.findCurrentUserFavorite(selectedUser, this.state.favoriteDayTimes);
        this.setState({ selectedUser, opponents, notPlayedWith, currentUserFavorite });
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

    findCurrentUserFavorite(user, favoriteDayTimes) {
        return favoriteDayTimes.find(item => item.Name === user);
    }

    doesTimeMatch(currentUserFavorite, playerFavorite) {
        if (!currentUserFavorite || !playerFavorite) return false;

        const matchDay1 = currentUserFavorite.DAY1 === playerFavorite.DAY1 && currentUserFavorite.TIME1 === playerFavorite.TIME1;
        const matchDay2 = currentUserFavorite.DAY2 === playerFavorite.DAY2 && currentUserFavorite.TIME2 === playerFavorite.TIME2;

        return matchDay1 || matchDay2;
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

    renderFavoriteDayTimesTable(data) {
        const { currentUserFavorite } = this.state;
        return React.createElement('table', null,
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Name'),
                    React.createElement('th', null, 'DAY1'),
                    React.createElement('th', null, 'TIME1'),
                    React.createElement('th', null, 'DAY2'),
                    React.createElement('th', null, 'TIME2'),
                    React.createElement('th', null, 'Matches with Current User')
                )
            ),
            React.createElement('tbody', null,
                data.map((item, index) =>
                    React.createElement('tr', { key: index },
                        React.createElement('td', null, item.Name),
                        React.createElement('td', null, item.DAY1),
                        React.createElement('td', null, item.TIME1),
                        React.createElement('td', null, item.DAY2),
                        React.createElement('td', null, item.TIME2),
                        React.createElement('td', null, this.doesTimeMatch(currentUserFavorite, item) ? 'Yes' : 'No')
                    )
                )
            )
        );
    }

    renderCurrentUserFavorite(data) {
        if (!data) return null;
        return React.createElement('div', null,
            React.createElement('h3', null, `Favorite Day and Time for ${data.Name}`),
            React.createElement('p', null, `DAY1: ${data.DAY1} TIME1: ${data.TIME1}`),
            React.createElement('p', null, `DAY2: ${data.DAY2} TIME2: ${data.TIME2}`)
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
            ),
            React.createElement('div', { id: 'current-user-favorite' },
                this.state.selectedUser && this.renderCurrentUserFavorite(this.state.currentUserFavorite)
            ),
            React.createElement('div', { id: 'favorite-day-times' },
                this.renderFavoriteDayTimesTable(this.state.favoriteDayTimes)
            )
        );
    }
}

// Render the Content component into the 'content' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('content')
);
