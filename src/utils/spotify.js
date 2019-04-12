export const auth = () => {
  let clientId = 'bfa95165905540d48f188f8a44e93502';
  let redirectUri = 'https://cfontana0.github.io/spotify-client/callback';

  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    redirectUri = 'http://localhost:3000/callback';
    clientId = '860725a4e08640199e5261d2a8a5d07c';
  }

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${redirectUri}`;
};

export const isAuth = () => {
  const hashParams = {};

  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);

  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  if (hashParams.access_token) {
    window.localStorage.setItem('access_token', hashParams.access_token);
  }

  // FOR TEST ONLY
  if (!window.clientInformation) {
    return true;
  }

  return !!hashParams.access_token;
};
