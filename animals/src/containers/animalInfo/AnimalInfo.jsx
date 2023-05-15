import React, { useState } from "react";
import pandaImg from "../../assets/images/panda.jpg";
import horseImg from "../../assets/images/horse.jpg";
import elephanImg from "../../assets/images/elephan.jpg";
import tigerImg from "..//../assets/images/tiger.jpg";

import "./animalInfo.style.css";

const animalImages = [
  {
    name: "panda",
    src: pandaImg,
    alt: "panda in the forest",
    text: "Panda is an asian animal, Eats bamboo and very lazy",
  },
  {
    name: "horse",
    src: horseImg,
    alt: "some nations in the world they eat horses. They are big and strong",
    text: "Horse",
  },
  {
    name: "elephan",
    src: elephanImg,
    alt: "Elephan is good",
    text: "Elephan",
  },

  {
    name: "tiger",
    src: tigerImg,
    alt: "Tiger",
    text: "Tiger",
  },
];

function AnimalInfo() {
  //   const [showText, setShowText] = useState(false);
  const [currentImageInfo, setCurrentImageInfo] = useState("");

  const onImageClick = (e) => {
    const { name, accessKey } = e.target;
    console.log(name, accessKey);

    setCurrentImageInfo(animalImages[accessKey].text);
    console.log("e", e);
    // setShowText(!showText);
  };

  const showAllImages = animalImages.map((animal, index) => {
    return (
      <img
        src={animal.src}
        name={animal.name}
        width="100px"
        key={index}
        accessKey={index}
        alt={animal.alt}
        onClick={onImageClick}
      />
    );
  });

  const showImageInfo = () => {};

  return (
    <div>
      {showAllImages}
      <p>{currentImageInfo}</p>
      {/* <img src={pandaImg} width="100px" onClick={onImageClick} />
      <img src={horseImg} width="100px" onClick />
      <img src={elephanImg} width="100px" />
      <img src={tigerImg} width="100px" />
      {showText && <p>This is Mr Kung Fu Panda</p>}  */}
    </div>
  );
}

export default AnimalInfo;
