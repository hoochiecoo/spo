// Define Content component
function Content() {
    return React.createElement('div', null, 'Hello, Events');
}

// Render the Content component into the 'content' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('Events')
);
