// Content.js

// Define Content component with inline CSS
function Content() {
    const style = {
        color: 'blue',
        fontSize: '20px',
    };

    return React.createElement('div', { style: style }, 'Hello, Home');
}

// Ensure that the script is executed after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Content),
        document.getElementById('content')
    );
});
