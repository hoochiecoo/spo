// Define Content component
function Content() {
    return React.createElement('iframe', {
        title: "SUBOTICA BOWLING 2024",
        'aria-label': "Table",
        id: "datawrapper-chart-5vcmO",
        src: "https://datawrapper.dwcdn.net/5vcmO/15/",
        scrolling: "no",
        frameBorder: "0",
        style: {
            width: '100%',
            minWidth: '100% !important',
            border: 'none'
        },
        height: 507,
        'data-external': 1
    });
}

// Render the Content component into the 'Rankings' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('Rankings')
);
