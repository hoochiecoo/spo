// Define Content component
function Content() {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    const player1Stats = {
        maxScore: getRandomInt(150, 300),
        avgScore: getRandomFloat(100, 150),
        minScore: getRandomInt(50, 100),
        strikeCount: getRandomInt(10, 20),
        spareCount: getRandomInt(5, 15),
        firstThrowAvg: getRandomFloat(5, 10),
        totalFrames: getRandomInt(10, 20),
        gutterBalls: getRandomInt(0, 5),
        splitConversions: getRandomInt(1, 5),
    };

    const player2Stats = {
        maxScore: getRandomInt(150, 300),
        avgScore: getRandomFloat(100, 150),
        minScore: getRandomInt(50, 100),
        strikeCount: getRandomInt(10, 20),
        spareCount: getRandomInt(5, 15),
        firstThrowAvg: getRandomFloat(5, 10),
        totalFrames: getRandomInt(10, 20),
        gutterBalls: getRandomInt(0, 5),
        splitConversions: getRandomInt(1, 5),
    };

    return (
        <div>
            <h2>Bowling Match Statistics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Statistic</th>
                        <th>Player 1</th>
                        <th>Player 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maximum Score</td>
                        <td>{player1Stats.maxScore}</td>
                        <td>{player2Stats.maxScore}</td>
                    </tr>
                    <tr>
                        <td>Average Score</td>
                        <td>{player1Stats.avgScore}</td>
                        <td>{player2Stats.avgScore}</td>
                    </tr>
                    <tr>
                        <td>Minimum Score</td>
                        <td>{player1Stats.minScore}</td>
                        <td>{player2Stats.minScore}</td>
                    </tr>
                    <tr>
                        <td>Strike Count</td>
                        <td>{player1Stats.strikeCount}</td>
                        <td>{player2Stats.strikeCount}</td>
                    </tr>
                    <tr>
                        <td>Spare Count</td>
                        <td>{player1Stats.spareCount}</td>
                        <td>{player2Stats.spareCount}</td>
                    </tr>
                    <tr>
                        <td>First Throw Average</td>
                        <td>{player1Stats.firstThrowAvg}</td>
                        <td>{player2Stats.firstThrowAvg}</td>
                    </tr>
                    <tr>
                        <td>Total Frames Played</td>
                        <td>{player1Stats.totalFrames}</td>
                        <td>{player2Stats.totalFrames}</td>
                    </tr>
                    <tr>
                        <td>Gutter Balls</td>
                        <td>{player1Stats.gutterBalls}</td>
                        <td>{player2Stats.gutterBalls}</td>
                    </tr>
                    <tr>
                        <td>Split Conversions</td>
                        <td>{player1Stats.splitConversions}</td>
                        <td>{player2Stats.splitConversions}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// Render the Content component into the 'content' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('Players2')
);
