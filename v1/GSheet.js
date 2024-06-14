// Define CSS styles
const styles = {
    responsiveIframe: {
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%', // Aspect ratio for 16:9
    },
    iframe: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        border: '0',
    },
};

// GoogleSheetsEmbed component for embedding Google Sheets in a responsive iframe
function GoogleSheetsEmbed() {
    return (
        React.createElement('div', { className: 'responsive-iframe', style: styles.responsiveIframe },
            React.createElement('iframe', {
                src: 'https://docs.google.com/spreadsheets/d/1wGENw2WSbXr5fvzjSHLU0EUM61QUBQUFUsofmELkmRk/edit?gid=188548866#gid=188548866',
                width: '100%',
                height: '100%',
                frameBorder: '0',
                allowFullScreen: true,
                style: styles.iframe
            })
        )
    );
}

// Main App component to render the GoogleSheetsEmbed component
function App() {
    return (
        React.createElement('div', null,
            React.createElement(GoogleSheetsEmbed)
        )
    );
}

// Render the App component into the 'content' container
ReactDOM.render(
    React.createElement(App),
    document.getElementById('GSheet')
);
