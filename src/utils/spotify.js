export const auth = () => {
  // http://localhost:3000/callback#access_token=BQD_9OmgJ7YiPJof0v2zktVuopvwrKyDOM5IktAtRA8V0KGSMa4nZhTQjJZsVbkdl0PJO9T3xLcFrOJKzzEvVd7R2Auc1pOye-DObMz9JVL96mTFtIe_2Bbp0v0qufoSIMY2Vej5DOrQbSEPwyrIidBIGV7XH_q9zkbxPkrITin0iWQlnrYYrf5JPZgMHTKDZi7OjLGW5oAYVmWEo694Pu2iYiHko656SsSLMPc7tWoU4kVTIw6cy-a8IcmyzWvHWfX3a0AWkrw65l4TbxsGGgI6j91YxMshhA&token_type=Bearer&expires_in=3600
  const clientId = '860725a4e08640199e5261d2a8a5d07c';
  let redirectUri = 'https://cfontana0.github.io/spotify-client/callback';

  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    redirectUri = 'http://localhost:3000/callback';
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
