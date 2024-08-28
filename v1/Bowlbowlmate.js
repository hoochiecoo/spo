/ Define CSS styles using JavaScript objects
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#121212',
        color: '#e0e0e0'
    },
    navbar: {
        backgroundColor: '#1f1f1f',
        color: '#e0e0e0',
        padding: '10px',
        textAlign: 'center'
    },
    logo: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    hero: {
        backgroundImage: 'url("https://www.bowlingdigital.de/wp-content/uploads/2017/11/bowling.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#e0e0e0',
        textAlign: 'center',
        padding: '60px 15px'
    },
    heroH1: {
        fontSize: '24px',
        margin: 0
    },
    heroP: {
        fontSize: '16px',
        margin: '15px 0'
    },
    searchBox: {
        marginTop: '20px'
    },
    select: {
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        maxWidth: '300px',
        margin: '5px 0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#333',
        color: '#e0e0e0'
    },
    selectOptionDisabled: {
        color: '#888'
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        maxWidth: '300px',
        margin: '5px 0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#ff6f61',
        color: 'white',
        cursor: 'pointer'
    },
    infoSection: {
        padding: '20px 15px',
        textAlign: 'center',
        backgroundColor: '#1f1f1f'
    },
    infoSectionH2: {
        fontSize: '20px',
        marginBottom: '15px'
    },
    infoSectionP: {
        fontSize: '14px',
        marginBottom: '15px'
    },
    bookingSection: {
        padding: '20px 15px',
        backgroundColor: '#333',
        textAlign: 'center'
    },
    bookingSectionH2: {
        fontSize: '20px',
        marginBottom: '15px'
    },
    slots: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    slot: {
        backgroundColor: '#1f1f1f',
        padding: '15px',
        borderRadius: '5px',
        margin: '5px 0',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    slotHover: {
        backgroundColor: '#ff6f61',
        color: 'white'
    },
    slotDisabled: {
        backgroundColor: '#555',
        cursor: 'not-allowed'
    },
    footer: {
        backgroundColor: '#1f1f1f',
        color: '#e0e0e0',
        padding: '15px',
        textAlign: 'center'
    },
    footerP: {
        margin: 0,
        fontSize: '12px'
    },
    popup: {
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    popupContent: {
        background: '#1f1f1f',
        padding: '20px',
        borderRadius: '5px',
        width: '90%',
        maxWidth: '400px'
    },
    popupContentH2: {
        marginTop: 0
    },
    popupInput: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        border: '1px solid #333',
        background: '#333',
        color: '#e0e0e0'
    },
    popupButton: {
        backgroundColor: '#ff6f61',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%'
    },
    popupButtonCancel: {
        backgroundColor: '#666',
        marginTop: '10px'
    }
};

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
