// Define Content component
function Content() {
    return React.createElement('div', null, 'Hello, Players');
}

// Render the Content component into the 'content' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('Players')
);
