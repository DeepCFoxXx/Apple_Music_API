import React from 'react';
import MusicDetail from '../components/MusicDetail.js';
import MusicSelector from '../components/MusicSelector.js';

class MusicContainer extends React.Components {
  constructor(props){
    super(props);
    this.state = {
      music:[],
      currentMusic: null
    };
    this.handleMusicSelected = this.handleMusicSelected.bind(this);
  }
}

export default MusicContainer;
