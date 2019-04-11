import * as actionTypes from '../constants/actionTypes';

const initialState = {
  playlist: null,
  profile: null,
  songs: [],
  error: null,
  automatedTest: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_PLAYLIST:
      return { ...state, playlist: action.payload };
    case actionTypes.ON_PROFILE:
      return { ...state, profile: action.payload };
    case actionTypes.ON_PLAYLIST_SONGS:
      return { ...state, songs: action.payload };
    case actionTypes.ON_LOGOUT:
      return { ...state, playlist: null, profile: null, songs: [] };
    case actionTypes.ON_PLAYLIST_ERROR:
      return {
        ...state,
        error: 'There was an error trying to get your playlist',
      };
    case actionTypes.ON_PROFILE_ERROR:
      return {
        ...state,
        error: 'There was an error trying to get your profile',
      };
    case actionTypes.ON_PLAYLIST_SONGS_ERROR:
      return {
        ...state,
        error: 'There was an error trying to get your songs',
      };
    case actionTypes.ON_LOGOUT_ERROR:
      return {
        ...state,
        error: 'There was an error trying to logout',
      };
    default:
      return state;
  }
}
