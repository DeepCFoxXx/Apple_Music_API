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

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if(xhr.status !== 200) return;
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      this.setState({
        music: data.feed.entry
      });
    });

    xhr.send();
  }

  handleMusicSelected(index) {
    const selectedMusic = this.state.music[index];
    this.setState({
      currentMusic: selectedMusic
    });
  }

  render(){
    return (
      <div>
        <h2>Apple Top 20</h2>
        <MusicSelector music={this.state.music} onMusicSelected={this.handleMusicSelected}/>
        <MusicDetail song={this.state.currentMusic}/>
      </div>
    );
  }
}

export default MusicContainer;
