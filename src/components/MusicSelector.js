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

  return(
    <select id="music-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Music Choice</option>
      {options}
    </select>
  )

}

export default MusicSelector;
