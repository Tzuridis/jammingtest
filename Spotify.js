const clientId = '702aae7491eb4bea8f815dd47b7f86bb';
const redirectUri = 'http://localhost:3000/';
let token;


const Spotify = {

  getAccessToken() {
    if (token) {
      return token;
    }
  };

  const accessToken = window.location.href.match(/access_token=([^&]*)/);
  const expirationTime = window.location.href.match(/expires_in=([^&]*)/);
  


};


export default Spotify;
