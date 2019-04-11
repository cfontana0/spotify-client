import React from 'react';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { profile, playlist, songs, error } from './__data__';
import Home from './containers/home';

const mockStore = configureStore([thunk]);
const store = mockStore({
  home: {
    playlist,
    profile,
    songs,
    error,
    automatedTest: true,
  },
});

jest.mock('react-h5-audio-player', () => () => <div />);

it('renders without crashing', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
