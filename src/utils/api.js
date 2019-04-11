import axios from 'axios';

export const profileApi = async () => {
  const accessToken = window.localStorage.getItem('access_token');

  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  const response = await axios.get(`https://api.spotify.com/v1/me`);

  return response;
};

export const playlistApi = async userId => {
  const accessToken = window.localStorage.getItem('access_token');

  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  const response = await axios.get(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
  );

  return response;
};

export const playlistSongsApi = async (userId, playlistId) => {
  const accessToken = window.localStorage.getItem('access_token');

  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  const response = await axios.get(
    `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
  );

  return response;
};
