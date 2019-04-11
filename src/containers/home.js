import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Grid,
  Container,
  Table,
  Image,
  Button,
  Icon,
  Dropdown,
  Header,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import moment from 'moment';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import { TopHeader, Player } from '../components';
import {
  getProfile,
  getPlaylist,
  getPlaylistSongs,
  logoutAction,
} from '../actions/home';
import { isAuth, auth } from '../utils/spotify';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.nextRequest = null;
    this.state = {
      selectedPlaylist: null,
      selectedSong: null,
      playlistOptions: [
        { key: 'PICK ONE', text: 'PICK ONE', value: 'PICK ONE' },
      ],
      loading: true,
    };
  }

  async componentDidMount() {
    const hasToken = isAuth();

    if (!hasToken) {
      this.setState({ loading: false });
      return;
    }

    const { actions } = this.props;
    await actions.getProfile();
    const { home } = this.props;
    const { profile, automatedTest } = home;

    if (profile && profile.id) {
      await actions.getPlaylist(profile.id);
      this.checkError();
      const { playlist, songs } = this.props.home;
      const playlistOptions = [...this.state.playlistOptions];

      playlist.items.forEach(item => {
        playlistOptions.push({
          key: item.id,
          text: item.name,
          value: item.id,
        });
      });

      this.setState({ playlistOptions, loading: false });
      if (automatedTest) {
        this.setState({
          selectedPlaylist: playlist.items[0],
          selectedSong: songs.items[0],
        });
      }
    } else {
      this.setState({ loading: false });
    }
  }

  getSongsForPlaylist(selectedPlaylist) {
    const { home = {}, actions } = this.props;
    const { profile } = home;
    this.setState({ loading: true }, async () => {
      await actions.getPlaylistSongs(profile.id, selectedPlaylist.id);
      this.checkError();
      this.setState({ selectedPlaylist, loading: false });
    });
  }

  checkError() {
    const { home } = this.props;
    const { error } = home;
    if (error) {
      toast({
        title: 'Oops!',
        description: error,
      });
    }
  }

  logout() {
    const { actions } = this.props;
    actions.logoutAction();
  }

  authSpotify() {
    auth();
  }

  pickFromDropdown(list) {
    const { home = {} } = this.props;
    const { playlist } = home;
    const id = list.value;

    if (
      id !== 'PICK ONE' &&
      playlist &&
      playlist.items &&
      playlist.items.length > 0
    ) {
      const selectedPlaylist = playlist.items.find(item => item.id === id);
      this.getSongsForPlaylist(selectedPlaylist);
    }
  }

  selectSong(selectedSong) {
    this.setState({ selectedSong });
  }

  render() {
    const {
      selectedPlaylist,
      selectedSong,
      playlistOptions,
      loading,
    } = this.state;

    const { home } = this.props;
    const { profile, playlist, songs } = home;

    const ListPlaylist = ((playlist && playlist.items) || []).map(item => (
      <p key={item.id} onClick={() => this.getSongsForPlaylist(item)}>
        {item.name}
      </p>
    ));

    const ListSongs = ((songs && songs.items) || []).map(song => {
      const { track } = song;

      return (
        <Table.Row key={track.id} onClick={() => this.selectSong(song)}>
          <Table.Cell>
            <Image
              src={track.album.images[0].url}
              height="30"
              className="trackImg"
            />
          </Table.Cell>
          <Table.Cell>{track.name}</Table.Cell>
          <Table.Cell>{track.artists[0].name}</Table.Cell>
          <Table.Cell>{track.album.name}</Table.Cell>
          <Table.Cell>
            {moment.utc(track.duration_ms).format('mm:ss')}
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Container fluid className="home">
        <TopHeader
          profile={profile}
          onClickLogout={() => this.logout()}
          logged={!!profile}
        />
        {profile && (
          <Header as="h4">
            <Icon name="spotify" />
            <Header.Content>
              PLAYLIST:{' '}
              <Dropdown
                inline
                header="Adjust time span"
                options={playlistOptions}
                defaultValue={playlistOptions[0].value}
                onChange={(e, list) => this.pickFromDropdown(list)}
              />
            </Header.Content>
          </Header>
        )}
        <Grid celled>
          <Grid.Row columns={10}>
            {(!loading || playlist) && (
              <Grid.Column width={3}>
                <p className="titleText">PLAYLIST</p>
                {!profile && <p>Login to continue</p>}
                {profile && playlist === null && <p>There are no playlist</p>}
                {ListPlaylist}
              </Grid.Column>
            )}
            {loading && (
              <Dimmer active>
                <Loader indeterminate>Loading Playlist</Loader>
              </Dimmer>
            )}
            {selectedPlaylist && (
              <Grid.Column width={13}>
                <div className="playlistHead">
                  <div className="phLeft">
                    <Image src={selectedPlaylist.images[0].url} height="100" />
                  </div>
                  <div className="phRight">
                    <div className="phTitle">{selectedPlaylist.name}</div>
                    <div className="phSub">
                      {selectedPlaylist.tracks.total} songs
                    </div>
                  </div>
                </div>
                <Table basic="very" celled collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>COVER</Table.HeaderCell>
                      <Table.HeaderCell>SONG</Table.HeaderCell>
                      <Table.HeaderCell>ARTIST</Table.HeaderCell>
                      <Table.HeaderCell>ALBUM</Table.HeaderCell>
                      <Table.HeaderCell>TIME</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{ListSongs}</Table.Body>
                </Table>
              </Grid.Column>
            )}
            {!loading && !selectedPlaylist && (
              <Grid.Column width={13}>
                <div className="playlistHead">
                  <div className="phLeft" />
                  <div className="phRight">
                    <div className="phTitle">
                      {profile ? 'Playlist' : 'Hi there'}
                    </div>
                    <div className="phSub">
                      {profile
                        ? '0 songs'
                        : 'Please, login with Spotify to continue.'}
                    </div>
                  </div>
                </div>
                {!profile && (
                  <Button onClick={this.authSpotify} color="teal">
                    <Icon name="spotify" /> Login with Spotify
                  </Button>
                )}
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
        {selectedSong && <Player song={selectedSong} />}
        <SemanticToastContainer />
      </Container>
    );
  }
}

const mapStateToProps = ({ home }) => ({ home });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getProfile, getPlaylist, getPlaylistSongs, logoutAction },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
