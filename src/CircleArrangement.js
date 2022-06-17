import React from "react";
import styled from "styled-components";

export default function CircleArrangement({ setCurrentImage }) {
  const imgArr = [
    "https://i.ibb.co/W02vN00/104466996-714155316017680-3200005302407271214-n.jpg",
    "https://i.ibb.co/z6cq8nw/104431816-642579943012986-2288021561591194988-n.jpg",
    "https://i.ibb.co/XV334GY/104287052-630025824389903-3659960106707765370-n.jpg",
    "https://i.ibb.co/VN8NgPZ/104338424-1151124005242806-2803023027736328480-n.jpg",
    "https://i.ibb.co/6nHcMRz/104469816-261739398471494-3179166702810626944-n.jpg",
    "https://i.ibb.co/Dfmx6Kk/104430904-847855915740875-1592402461122480070-n.jpg",
    "https://i.ibb.co/MsSSTzr/104333719-1183551925323858-366756681526771127-n.jpg",
    "https://i.ibb.co/3FtWvV7/104136121-2716603811891458-947477019921470155-n.jpg",
    "https://i.ibb.co/LRvD9GN/104339516-735304453909424-5827990947201342497-n.jpg",
  ];

  return (
    <StyledCircleArrangement>
      {imgArr.map((img, idx) => (
        <li
          key={`circle-image-${idx}`}
          onClick={() => setCurrentImage(imgArr[idx])}
        >
          <img src={img} alt="dan and/or sons" />
        </li>
      ))}
    </StyledCircleArrangement>
  );
}

const StyledCircleArrangement = styled.ul`
  ${makeCircle(9, "500px", "100px")}
  margin: 5em auto 0;
  border: solid 5px #31332e;
  background: #fff;
  z-index: 1;

  img {
    display: block;
    max-width: 100%;
    border-radius: 50%;
    filter: grayscale(100%);
    border: solid 5px #F2CB05;
    box-shadow: 0px 0px 20px #F2CB05;
    transition: 0.15s;
    height: 100px;
    width: 100px;
    object-fit: cover;
    z-index: 2;

    &:hover,
    &:active {
      filter: grayscale(0);
    }
  }
`;

// CSS in JS mixin function to generate circle

function makeCircle(itemCount, circleSize, itemSize) {
  let rotation = 0;
  const angle = 360 / itemCount;
  let transformationString;

  for (let i = 0; i < itemCount + 1; i++) {
    rotation += angle;
    transformationString += `
      &:nth-of-type(${i}) {
        transform: rotate(${rotation}deg) translate(${
      parseInt(circleSize) / 2
    }px)
          rotate(${rotation * -1}deg);
      }
    `;
  }

  return `
    position: relative;
    width: ${circleSize};
    height: ${circleSize};
    padding: 0;
    border-radius: 50%;
    list-style: none;

    > * {
      display: block;
      position: absolute;
      top: 26%;
      left: 27%;
      width: ${itemSize};
      height: ${itemSize};
      margin: ${parseInt(itemSize) / 2}px;

      ${transformationString}
    }
  `;
}
