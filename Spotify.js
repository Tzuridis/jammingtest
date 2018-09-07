const clientId = '702aae7491eb4bea8f815dd47b7f86bb';
const redirectUri = 'http://localhost:3000/';
const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

let token;
let expiresIn;


const Spotify = {

  getAccessToken() {
    if (token) {
      return token;
    }
  };

  const accessToken = window.location.href.match(/access_token=([^&]*)/);
  const expirationTime = window.location.href.match(/expires_in=([^&]*)/);

  if (accessToken === true && expirationTime === true) {
    token = accessToken;
    expiresIn = expirationTime;
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
  } else {
     window.location = spotifyUrl;
  };


};


export default Spotify;
