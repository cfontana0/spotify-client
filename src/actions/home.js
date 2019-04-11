import { playlistApi, profileApi, playlistSongsApi } from '../utils/api';
import {
  ON_PLAYLIST,
  ON_PROFILE,
  ON_PLAYLIST_SONGS,
  ON_LOGOUT,
  ON_PLAYLIST_ERROR,
  ON_PROFILE_ERROR,
  ON_PLAYLIST_SONGS_ERROR,
  ON_LOGOUT_ERROR,
} from '../constants/actionTypes';

const onProfileSuccess = payload => ({
  type: ON_PROFILE,
  payload,
});

const onProfileError = payload => ({
  ON_PROFILE_ERROR,
  type: ON_PROFILE_ERROR,
  payload,
});

export const getProfile = () => async dispatch => {
  const response = await profileApi();

  if (response.status === 200) {
    return dispatch(onProfileSuccess(response.data));
  }

  return dispatch(onProfileError(response));
};

const onPlaylistSuccess = payload => ({
  type: ON_PLAYLIST,
  payload,
});

const onPlaylistError = payload => ({
  type: ON_PLAYLIST_ERROR,
  payload,
});

export const getPlaylist = userId => async dispatch => {
  const response = await playlistApi(userId);

  if (response.status === 200) {
    return dispatch(onPlaylistSuccess(response.data));
  }

  return dispatch(onPlaylistError(response));
};

const onPlaylistSongsSuccess = payload => ({
  type: ON_PLAYLIST_SONGS,
  payload,
});

const onPlaylistSongsError = payload => ({
  type: ON_PLAYLIST_SONGS_ERROR,
  payload,
});

export const getPlaylistSongs = (userId, playlistId) => async dispatch => {
  const response = await playlistSongsApi(userId, playlistId);

  if (response.status === 200) {
    return dispatch(onPlaylistSongsSuccess(response.data));
  }

  return dispatch(onPlaylistSongsError(response));
};

const onLogoutActionSuccess = payload => ({
  type: ON_LOGOUT,
  payload,
});

const onLogoutActionError = payload => ({
  type: ON_LOGOUT_ERROR,
  payload,
});

export const logoutAction = () => dispatch => {
  try {
    window.localStorage.clear();
    window.location.href = '/';
    return dispatch(onLogoutActionSuccess());
  } catch (error) {
    return dispatch(onLogoutActionError(error));
  }
};
