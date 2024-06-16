
const rideData = [
    { day: 'Monday', departure: '17:00', driver: 'Milan', rating: 1500, group: 'PRO' },
    { day: 'Monday', departure: '19:30', driver: 'Damir', rating: 1450, group: 'LIGUE' },
    { day: 'Monday', departure: '21:00', driver: 'Ana', rating: 1600, group: 'NEW' },
    { day: 'Tuesday', departure: '16:30', driver: 'Marko', rating: 1700, group: 'PRO' },
    { day: 'Tuesday', departure: '17:30', driver: 'Ivan', rating: 1800, group: 'PRO' },
    { day: 'Tuesday', departure: '19:00', driver: 'Jovan', rating: 1550, group: 'PRO' },
    { day: 'Wednesday', departure: '17:30', driver: 'Petar', rating: 1650, group: 'LIGUE' },
    { day: 'Wednesday', departure: '20:00', driver: 'Sasa', rating: 1400, group: 'PRO' },
    { day: 'Thursday', departure: '17:00', driver: 'Milos', rating: 1750, group: 'LIGUE' },
    { day: 'Thursday', departure: '18:30', driver: 'Nenad', rating: 1350, group: 'PRO' },
    { day: 'Thursday', departure: '20:00', driver: 'Dejan', rating: 1450, group: 'LIGUE' },
    { day: 'Monday', departure: '17:00', driver: 'Nikola', rating: 1580, group: 'PRO' },
    { day: 'Monday', departure: '19:30', driver: 'Filip', rating: 1400, group: 'LIGUE' },
    { day: 'Monday', departure: '21:00', driver: 'Dragan', rating: 1600, group: 'NEW' },
    { day: 'Tuesday', departure: '16:30', driver: 'Goran', rating: 1680, group: 'PRO' },
    { day: 'Tuesday', departure: '17:30', driver: 'Zoran', rating: 1750, group: 'PRO' },
    { day: 'Tuesday', departure: '19:00', driver: 'Bojan', rating: 1550, group: 'PRO' },
    { day: 'Wednesday', departure: '17:30', driver: 'Aleksandar', rating: 1600, group: 'LIGUE' },
    { day: 'Wednesday', departure: '20:00', driver: 'Mladen', rating: 1400, group: 'PRO' },
    { day: 'Thursday', departure: '17:00', driver: 'Mihajlo', rating: 1780, group: 'LIGUE' },
    { day: 'Thursday', departure: '18:30', driver: 'Svetlana', rating: 1350, group: 'PRO' },
    { day: 'Thursday', departure: '20:00', driver: 'Vladimir', rating: 1450, group: 'LIGUE' },
];

function RideTable(props) {
    const [minRating, setMinRating] = React.useState(1300);
    const [groupFilter, setGroupFilter] = React.useState('');
    const [dayFilter, setDayFilter] = React.useState('');

    const handleMinRatingChange = (event) => {
        setMinRating(event.target.value);
    };

    const handleGroupFilterChange = (event) => {
        setGroupFilter(event.target.value);
    };

    const handleDayFilterChange = (event) => {
        setDayFilter(event.target.value);
    };

    const filteredRides = props.rides.filter(ride => 
        ride.rating >= minRating &&
        (groupFilter === "" || ride.group === groupFilter) &&
        (dayFilter === "" || ride.day === dayFilter)
    );

    return React.createElement('div', null, 
        React.createElement('h1', null, 'Available Rides'),
        React.createElement('label', null, 'Min Rating:',
            React.createElement('input', {
                type: 'number',
                value: minRating,
                onChange: handleMinRatingChange,
                min: '1300',
                max: '1800'
            })
        ),
        React.createElement('label', null, 'Group:',
            React.createElement('select', {
                value: groupFilter,
                onChange: handleGroupFilterChange
            },
                React.createElement('option', { value: '' }, 'All'),
                React.createElement('option', { value: 'PRO' }, 'PRO'),
                React.createElement('option', { value: 'LIGUE' }, 'LIGUE'),
                React.createElement('option', { value: 'NEW' }, 'NEW')
            )
        ),
        React.createElement('label', null, 'Day:',
            React.createElement('select', {
                value: dayFilter,
                onChange: handleDayFilterChange
            },
                React.createElement('option', { value: '' }, 'All'),
                React.createElement('option', { value: 'Monday' }, 'Monday'),
                React.createElement('option', { value: 'Tuesday' }, 'Tuesday'),
                React.createElement('option', { value: 'Wednesday' }, 'Wednesday'),
                React.createElement('option', { value: 'Thursday' }, 'Thursday')
            )
        ),
        React.createElement('table', null,
            React.createElement('thead', null,
                React.createElement('tr', null,
                    React.createElement('th', null, 'Day'),
                    React.createElement('th', null, 'Departure'),
                    React.createElement('th', null, 'Driver'),
                    React.createElement('th', null, 'Rating'),
                    React.createElement('th', null, 'Group')
                )
            ),
            React.createElement('tbody', null, 
                filteredRides.map((ride, index) => 
                    React.createElement('tr', { key: index },
                        React.createElement('td', null, ride.day),
                        React.createElement('td', null, ride.departure),
                        React.createElement('td', null, ride.driver),
                        React.createElement('td', null, ride.rating),
                        React.createElement('td', null, ride.group)
                    )
                )
            )
        )
    );
}

// Define Content component
function Content() {
    return React.createElement(RideTable, { rides: rideData });
}

// Render the Content component into the 'content' container
ReactDOM.render(
    React.createElement(Content),
    document.getElementById('filtered_table')
);
