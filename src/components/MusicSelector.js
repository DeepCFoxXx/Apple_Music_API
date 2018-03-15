import React from 'react';
import MusicDetail from './MusicDetail.js';
import MusicContainer from '../containers/MusicContainer.js';

const MusicSelector = (props) => {

  function handleChange(e) {
    props.onMusicSelected(e.target.value);
  }

  const options = props.music.map((song, index) => {
    return <option value={index} key={index}>{song["im:name"]["label"]}</option>
  });

}

export default MusicSelector;
