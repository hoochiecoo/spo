// Header Component
function Header() {
    return (
        React.createElement('div', { className: 'header' },
            React.createElement('h1', null, 'Table Tennis'),
            React.createElement('button', { className: 'live-btn' }, 'Live Broadcasting')
        )
    );
}

// Player Component
function Player(props) {
    const { name, country, city } = props;
    return (
        React.createElement('div', { className: 'player' },
            React.createElement('h2', null, name),
            React.createElement('p', null, `Country and City: ${country}, ${city}`),
            React.createElement('button', { className: 'change-btn' }, 'Change Player'),
            React.createElement('img', { src: `images/${name}.jpg`, alt: `${name} Image` })
        )
    );
}

// Match Results Component
function MatchResults() {
    return (
        React.createElement('div', { className: 'match-results' },
            React.createElement('h2', null, 'Match Results'),
            React.createElement('table', null,
                React.createElement('thead', null,
                    React.createElement('tr', null,
                        React.createElement('th', null, '#'),
                        React.createElement('th', null, 'Date'),
                        React.createElement('th', null, 'Time'),
                        React.createElement('th', null, 'Result')
                    )
                ),
                React.createElement('tbody', null,
                    React.createElement('tr', null,
                        React.createElement('td', null, '1.'),
                        React.createElement('td', null, '14.06.2024'),
                        React.createElement('td', null, '12:20'),
                        React.createElement('td', null, '3:1 (12:10, 11:9, 8:11, 11:9)'),
                        React.createElement('td', null,
                            React.createElement('button', { className: 'play-btn' }, 'Play')
                        )
                    ),
                    React.createElement('tr', null,
                        React.createElement('td', null, '2.'),
                        React.createElement('td', null, '11.06.2024'),
                        React.createElement('td', null, '14:50'),
                        React.createElement('td', null, '1:3 (7:11, 11:8, 9:11, 10:12)'),
                        React.createElement('td', null,
                            React.createElement('button', { className: 'play-btn' }, 'Play')
                        )
                    ),
                    // Additional rows can be added similarly
                )
            )
        )
    );
}

// Footer Component
function Footer() {
    return (
        React.createElement('div', { className: 'footer' },
            React.createElement('h2', null, 'Partners'),
            React.createElement('p', null, 'Section for partners (partially visible)')
        )
    );
}

// Main App Component
function App() {
    return (
        React.createElement('div', { className: 'app' },
            React.createElement(Header),
            React.createElement('div', { className: 'main-section' },
                React.createElement('div', { className: 'compare-players' },
                    React.createElement(Player, { name: 'Matousch Simon', country: 'Czech Republic', city: 'Prague' }),
                    React.createElement('p', null, 'VS'),
                    React.createElement(Player, { name: 'Nemec Michal', country: 'Czech Republic', city: 'Prague' })
                ),
                React.createElement(MatchResults)
            ),
            React.createElement(Footer)
        )
    );
}

// Render the App component into the 'content' container
ReactDOM.render(
    React.createElement(App),
    document.getElementById('Players')
);
