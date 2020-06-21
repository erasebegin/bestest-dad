import React, {useState} from "react";
import styled from "styled-components";

export default function Gallery() {

  const imgArr = [
    "https://i.ibb.co/W02vN00/104466996-714155316017680-3200005302407271214-n.jpg",
    "https://i.ibb.co/z6cq8nw/104431816-642579943012986-2288021561591194988-n.jpg",
    "https://i.ibb.co/XV334GY/104287052-630025824389903-3659960106707765370-n.jpg",
    "https://i.ibb.co/VN8NgPZ/104338424-1151124005242806-2803023027736328480-n.jpg",
    "https://i.ibb.co/6nHcMRz/104469816-261739398471494-3179166702810626944-n.jpg",
    "https://i.ibb.co/Dfmx6Kk/104430904-847855915740875-1592402461122480070-n.jpg",
    "https://i.ibb.co/MsSSTzr/104333719-1183551925323858-366756681526771127-n.jpg",
    "https://i.ibb.co/3FtWvV7/104136121-2716603811891458-947477019921470155-n.jpg",
    "https://i.ibb.co/LRvD9GN/104339516-735304453909424-5827990947201342497-n.jpg"
  ];
  const [currImg, setCurrImg] = useState(0)

  return (
    <GalleryContainer>
      <div className="subcontainer">
        <img className="gallery-image" src={imgArr[0]} onClick={()=> setCurrImg(0)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[2]} onClick={()=> setCurrImg(2)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[3]} onClick={()=> setCurrImg(3)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[1]} onClick={()=> setCurrImg(1)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[4]} onClick={()=> setCurrImg(4)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[5]} onClick={()=> setCurrImg(5)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[6]} onClick={()=> setCurrImg(6)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[7]} onClick={()=> setCurrImg(7)} alt="childhood family"></img>
        <img className="gallery-image" src={imgArr[8]} onClick={()=> setCurrImg(8)} alt="childhood family"></img>
      </div>
      <img className = "main-image" src={imgArr[currImg]} alt="childhood family"></img>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
  margin: 3em;

  .main-image {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: cover;
  }

  .gallery-image {
    max-width: 100px;
    object-fit: cover;
    transition: 200ms;
    margin: 0 .5em;
    border-radius: 8px;

    &:hover {
      transform: translate(-2px, -1px);
      transition: 200ms;
      cursor: pointer;
      filter: contrast(1.5);
    }
  }

  .subcontainer {
    background: black;
    padding: .5em;
    margin: .5em;
    border-radius: 10px;
  }
`;
