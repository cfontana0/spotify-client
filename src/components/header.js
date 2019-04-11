import React, { Component } from 'react';
import { Feed, Segment, Button } from 'semantic-ui-react';

class TopHeader extends Component {
  render() {
    const { profile, logged, onClickLogout } = this.props;
    const name = profile && profile.display_name;
    const image = profile && profile.images ? profile.images[0].url : null;

    return (
      <Segment inverted>
        <Feed>
          <Feed.Event className="menu-user">
            <Feed.Label>{image && <img alt={name} src={image} />}</Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{name}</Feed.User>
                {logged && (
                  <Button
                    circular
                    icon="log out"
                    className="logout"
                    onClick={onClickLogout}
                  />
                )}
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    );
  }
}

export default TopHeader;
