
function OauthUserInfo({ user }) {
    if (user) {
        return React.createElement('div', null, `Hello, ${user.name}`);
    } else {
        return React.createElement('div', null, 'Hello, Home');
    }
}

async function fetchUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const accessCode = urlParams.get('access_code');
    
    if (accessCode) {
        const response = await fetch('https://03b4-173-249-203-34.ngrok-free.app/user-info', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Code': accessCode
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data.user;
        }
    }
    return null;
}

async function renderContent() {
    const user = await fetchUser();
    ReactDOM.render(
        React.createElement(OauthUserInfo, { user }),
        document.getElementById('Home')
    );
}
