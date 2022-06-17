import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as HeartIcon } from "./media/heart.svg";
import mainImage from "./media/dad-simon-n-me-2022.svg";
import styled from "styled-components";
import CircleArrangement from "./CircleArrangement";
import ReactAudioPlayer from "react-audio-player";
import dadSong from "./media/daddy-song-remix.mp3";

export default function App() {
  const [currentImage, setCurrentImage] = useState();
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("You clicked outside of me!");
        setCurrentImage();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <Main>
      <Modal open={currentImage}>
        <img src={currentImage} alt="us and dad" ref={modalRef} />
      </Modal>
      <TopSection>
        <Sun />
        <MainImage src={mainImage} alt="Dad, Simon 'n Me" />
        <CircleArrangement setCurrentImage={setCurrentImage} />
      </TopSection>
      <Divider />
      <BottomSection>
        <ReactAudioPlayer
          src={dadSong}
          controls
          style={{
            padding: "0.5rem",
            background: "#F2CB05",
            borderRadius: "2rem",
            margin: "1em",
            boxShadow: "0px 0px 20px #F2CB05",
          }}
        />
        <Lyrics>
          <div>
            <p>
              We were
              <br />
              We were always curious
              <br />
              We were always curious
              <br />
              Kids who laughed
              <br />
              Kids who touched
              <br />
              Kids who asked so very much
              <br />
            </p>
            <p>
              We were always so curious
              <br />
              We always wanted new things
              <br />
              We always wanted new things
              <br />
              Wanted this, wanted that
              <br />
              A dog a cat, a cricket bat
              <br />
              We always wanted new things
              <br />
            </p>
            <p>
              Daddy, daddy, we love you
              <br />
              Thank you for everything
              <br />
              Daddy, daddy we love you
              <br />
              You're the best dad we could ask for
              <br />
            </p>
            <p>
              You gave us all we'd ever need
              <br />
              Xbox, drums and most between
              <br />
              Our friends were all jealous
              <br />
              That we had such cool parents
              <br />
              Who gave us so very much
              <br />
            </p>
          </div>
          <div>
            <p>
              Daddy, daddy, we love you
              <br />
              Thank you for everything
              <br />
              Daddy, daddy we love you
              <br />
              You're the best dad we could ask for
              <br />
            </p>
            <p>
              But now we're older
              <br />
              We're wiser, we know
              <br />
              The biggest part of the entire parenting show
              <br />
              Was not in the lavish
              <br />
              Gifts or the gadgets
              <br />
              But in being the person we both could look up to
              <br />
              And giving us all of our best habits
              <br />
            </p>
            <p>
              Daddy, daddy, we love you
              <br />
              Thank you for everything
              <br />
              Daddy, daddy we love you
              <br />
              You're the best dad we could ask for
              <br />
            </p>
            <HeartIcon />
          </div>
        </Lyrics>
      </BottomSection>
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #a2d9e9;
  z-index: 1;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffffff88;
  backdrop-filter: blur(2px);
  z-index: 50;
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.open &&
    `
    transition: opacity 400ms ease-in-out;
    opacity: 1;
    pointer-events: initial;
  `};

  img {
    max-width: 50vw;
    max-height: 75vh;
    border-radius: 2rem;
    object-fit: cover;
  }
`;

const TopSection = styled.section`
  display: flex;
  justify-content: center;
`;

const Sun = styled.div`
  background: #f2cb05;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  position: absolute;
  right: 5rem;
  top: 1rem;
`;

const MainImage = styled.img`
  position: absolute;
  max-width: 400px;
  z-index: 3;
  pointer-events: none;
`;

const Divider = styled.section`
  overflow: hidden;
  position: relative;
  height: 250px;

  &::before {
    content: "";
    font-family: "shape divider from ShapeDividers.com";
    position: absolute;
    z-index: 3;
    pointer-events: none;
    background-repeat: no-repeat;
    bottom: -0.1vw;
    left: -0.1vw;
    right: -0.1vw;
    top: -0.1vw;
    background-size: 136% 220px;
    background-position: 50% 100%;
    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%2394bf69"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%2394bf69"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%2394bf69"/></svg>');
  }

  @media (min-width: 2100px) {
    &::before {
      background-size: 136% calc(2vw + 220px);
    }
  }
`;

const BottomSection = styled.section`
  background: #94bf69;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Lyrics = styled.div`
  font-family: "Indie Flower", serif;
  font-size: 1.4rem;
  color: #31332e;
  display: flex;
  max-width: 1000px;

  p {
    width: 100%;
  }

  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      position: absolute;
      bottom: 10rem;
      max-width: 100px;
    }
  }
`;
