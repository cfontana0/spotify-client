import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

class Player extends Component {
  render() {
    const { song = {} } = this.props;
    const { track } = song;
    return (
      <div className="player">
        {track.preview_url && <AudioPlayer autoPlay src={track.preview_url} />}
        {track.preview_url && (
          <div className="playingSong">{`${track.name} ${
            track.artists[0].name
          }`}</div>
        )}
        {!track.preview_url && (
          <div className="noPreview">Sorry, this song is not available.</div>
        )}
      </div>
    );
  }
}

export default Player;
