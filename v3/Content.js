// Content.js

// Define Content component with inline CSS
function Content() {
    const style = {
        color: 'blue',
        fontSize: '20px',
    };

    return React.createElement('div', { style: style }, 'Hello, Home');
}

// Render the Content component into the 'content' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('Home')
);
