import React from 'react';

const MusicDetail = (props) => {
  if(!props.song) return null;
  console.log(props.song["link"][1]["attributes"]["href"]);
  return (
    <div className='song'>
    <h3>{props.song["im:name"]["label"]}</h3>
    <h4>{props.song["im:artist"]["label"]}</h4>
    <img src={props.song["im:image"][2]["label"]}/>
    <audio id="audio" key={props.song["im:name"]["label"]} controls>
     <source src={props.song["link"][1]["attributes"]["href"]} type="audio/mp4"/>
    </audio>
  </div>
  )
}

export default MusicDetail;
