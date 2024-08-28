// Define Navbar component
function Navbar() {
    return React.createElement('div', { className: 'navbar' },
        React.createElement('div', { className: 'logo' }, 'BowlBowlMate')
    );
}

// Define Hero component
function Hero() {
    return React.createElement('div', { className: 'hero' },
        React.createElement('h1', null, 'Book Your Ride with Friends'),
        React.createElement('p', null, 'Choose a bowling alley and time to enjoy a fun evening.'),
        React.createElement('div', { className: 'search-box' },
            React.createElement('select', null,
                React.createElement('option', { value: 'subotica_jumanji' }, 'Subotica Jumanji'),
                React.createElement('option', { value: '', disabled: true }, 'Coming Soon: Sombor RocknRoll'),
                React.createElement('option', { value: '', disabled: true }, 'Coming Soon: NoviSad Zabac')
            ),
            React.createElement('button', null, 'Search Rides')
        )
    );
}

// Define InfoSection component
function InfoSection() {
    return React.createElement('div', { className: 'info-section' },
        React.createElement('h2', null, 'Why Choose BowlBowlMate?'),
        React.createElement('p', null, 'BowlBowlMate makes it easy to book a ride at your favorite bowling alley. Enjoy a smooth booking experience and have fun with friends!')
    );
}

// Define BookingSection component
function BookingSection() {
    const [popupData, setPopupData] = React.useState(null);

    function showPopup(rideTime, players, placesLeft) {
        setPopupData({ rideTime, players, placesLeft });
        document.getElementById('popup').style.display = 'flex';
    }

    function hidePopup() {
        setPopupData(null);
        document.getElementById('popup').style.display = 'none';
    }

    function confirmBooking() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        if (name && phone) {
            alert(`Booking confirmed for ${name}. We will contact you at ${phone}.`);
            hidePopup();
        } else {
            alert('Please fill in all fields.');
        }
    }

    return React.createElement('div', { className: 'booking-section' },
        React.createElement('h2', null, 'Available Rides'),
        React.createElement('ul', { className: 'slots' },
            React.createElement('li', { onClick: () => showPopup('Tuesday 18:00', ['Alice', 'Bob'], 4) }, 'Tuesday 18:00 - 4 Places Left'),
            React.createElement('li', { onClick: () => showPopup('Tuesday 20:00', ['Charlie'], 2) }, 'Tuesday 20:00 - 2 Places Left'),
            React.createElement('li', { onClick: () => showPopup('Thursday 18:00', ['David'], 0) }, 'Thursday 18:00 - 0 Places Left'),
            React.createElement('li', { onClick: () => showPopup('Thursday 20:00', ['Eva', 'Frank', 'Grace'], 6) }, 'Thursday 20:00 - 6 Places Left')
        ),
        popupData && React.createElement('div', { id: 'popup', className: 'popup' },
            React.createElement('div', { className: 'popup-content' },
                React.createElement('h2', null, 'Book Your Ride'),
                React.createElement('p', { id: 'ride-info' }, `${popupData.rideTime} - ${popupData.placesLeft} Places Left`),
                React.createElement('p', null, React.createElement('strong', null, 'Players in Ride:')),
                React.createElement('ul', { id: 'player-list' },
                    popupData.players.map(player =>
                        React.createElement('li', { key: player }, player)
                    )
                ),
                React.createElement('input', { type: 'text', id: 'name', placeholder: 'Your Name' }),
                React.createElement('input', { type: 'text', id: 'phone', placeholder: 'Your Phone' }),
                React.createElement('button', { onClick: confirmBooking }, 'Confirm Booking'),
                React.createElement('button', { className: 'cancel', onClick: hidePopup }, 'Cancel')
            )
        )
    );
}

// Define Footer component
function Footer() {
    return React.createElement('div', { className: 'footer' },
        React.createElement('p', null, '© 2024 BowlBowlMate. All rights reserved.')
    );
}

// Define App component
function App() {
    return React.createElement(React.Fragment, null,
        React.createElement(Navbar),
        React.createElement(Hero),
        React.createElement(InfoSection),
        React.createElement(BookingSection),
        React.createElement(Footer)
    );
}

// Render the App component into the 'Schedule' container
ReactDOM.render(
    React.createElement(App),
    document.getElementById('Bowlbowlmate')
);
