// TournamentInfo component displays basic tournament information
function TournamentInfo() {
    return (
        <div>
            <h2>Basic Info</h2>
            <p>Tournament Name: [Your Tournament Name]</p>
            <p>Date: [Tournament Date]</p>
            <p>Location: [Tournament Location]</p>
        </div>
    );
}

// Rules component displays the rules of the tournament
function Rules() {
    return (
        <div>
            <h2>Rules</h2>
            <ul>
                <li>Rule 1: [Rule description]</li>
                <li>Rule 2: [Rule description]</li>
                <li>Rule 3: [Rule description]</li>
                {/* Add more rules as needed */}
            </ul>
        </div>
    );
}

// PlayersList component displays the list of players
function PlayersList() {
    const players = [
        { id: 1, name: 'Player 1' },
        { id: 2, name: 'Player 2' },
        { id: 3, name: 'Player 3' },
        // Add more players as needed
    ];

    return (
        <div>
            <h2>List of Players</h2>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
}

// AddYourselfLink component provides a link to add oneself to the tournament
function AddYourselfLink() {
    return (
        <div>
            <h2>Add Yourself</h2>
            <p>Want to participate? <a href="[Link to add yourself]">Click here</a> to add yourself to the tournament!</p>
        </div>
    );
}

// Main App component to render all sections
function App() {
    return (
        <div>
            <TournamentInfo />
            <hr />
            <Rules />
            <hr />
            <PlayersList />
            <hr />
            <AddYourselfLink />
        </div>
    );
}

// Render the App component into the 'content' container
ReactDOM.render(
    <App />,
    document.getElementById('TournamentInfo1')
);
