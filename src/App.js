import React from 'react';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import dadSong from './daddy-song-v2.mp3';
import dadImage from './dad-simon-and-me.png'
import Gallery from './Gallery';

const App = () => {
  return (
    <>
    <Main>
      <h1>
        Because you're the best dad in the world...
      </h1>
      <img className="drawing" src={dadImage} alt="drawing of my dad, brother and myself from left to right"></img>
      <h1>
        We wrote a song for you.
      </h1>
      <h1>
        It's called Daddy's Song.
      </h1>
      <ReactAudioPlayer 
      src={dadSong}
      controls
      /> 
      <h2>While you listen, here are some pictures</h2>   
      <h2>To remind you of the time when we no words are has</h2>
      <Gallery />
    </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Indie Flower', cursive;
  background-image: url(https://i.ibb.co/z2252ts/paper-background-o.jpg);
  background-repeat: repeat;
  padding: 1em;
  text-align: center;

  h1 {
    color: rgb(26, 14, 0);
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  .drawing {
    border-radius: 10px;
    max-width: 90vw;
    max-height: 90vh;
  }
`

export default App;
