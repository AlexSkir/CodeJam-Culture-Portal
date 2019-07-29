import React from 'react';
import './VideoPlayer.css';
import { FormattedMessage } from 'react-intl';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import PropTypes from 'prop-types';

function VideoPlayer(props) {
  return (
    <div id="videoPlayer" className="videoPlayer">
      <h2 style={{ textAlign: 'center', color: '#e86971', fontSize: '2em' }}>
        <FormattedMessage id="video" />
      </h2>
      <Player playsInline poster="" src={props.data.video} />
    </div>
  );
}

VideoPlayer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoPlayer;
