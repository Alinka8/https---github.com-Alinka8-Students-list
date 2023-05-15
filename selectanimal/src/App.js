import "./App.css";
import FirstPicture from "./components/containers/firstPicture/FirstPicture";
import SecondPicture from "./components/containers/secondPicture/SecondPicture";
import ThirdPicture from "./components/containers/thirdPicture/ThirdPicture";
import ForthPicture from "./components/containers/forthPicture/ForthPicture";
import AnimalsInfo from "./components/containers/animalsInfo/AnimalsInfo";
import React, { useState } from "react";

function App() {
  const [showFirstInfo, setShowFirstInfo] = useState(0);
  const [showSecondInfo, setShowSecondInfo] = useState(0);
  const [showThirdInfo, setShowThirdInfo] = useState(0);
  const [showForthInfo, setShowForthInfo] = useState(0);

  const clickFirst = () => {
    setShowFirstInfo(1);
    setShowSecondInfo(0);
    setShowThirdInfo(0);
    setShowForthInfo(0);
  };

  const clickSecond = () => {
    setShowFirstInfo(0);
    setShowSecondInfo(1);
    setShowThirdInfo(0);
    setShowForthInfo(0);
  };

  const clickThird = () => {
    setShowFirstInfo(0);
    setShowSecondInfo(0);
    setShowThirdInfo(1);
    setShowForthInfo(0);
  };

  const clickForth = () => {
    setShowFirstInfo(0);
    setShowSecondInfo(0);
    setShowThirdInfo(0);
    setShowForthInfo(1);
  };

  return (
    <>
      <h1>Animal Kingdom</h1>
      <h2>Click on pictures to learn more</h2>
      <div className="imgContainer">
        <AnimalsInfo
          type="tortoise"
          source={FirstPicture}
          onClickHandler={clickFirst}
        />
        <AnimalsInfo
          type="alpaca"
          source={SecondPicture}
          onClickHandler={clickSecond}
        />
        <AnimalsInfo
          type="fox"
          source={ThirdPicture}
          onClickHandler={clickThird}
        />
        <AnimalsInfo
          type="avocet"
          source={ForthPicture}
          onClickHandler={clickForth}
        />
      </div>

      {FirstPicture ? (
        <div>
          <p className="FirstInfo">
            The Aldabra Giant Tortoise is a massive, long-necked reptile endemic
            to the Aldabra Islands off the East Coast of Africa. The Aldabra
            giant tortoise is among the biggest types of land tortoise and
            longest-living animals on the planet, with one Aldabra Giant
            Tortoise living to the impressive age of 255 years old. The Aldabra
            Giant Tortoise is the last living species of Indian ocean giant
            Tortoise species alive today as others such as the Seychelles Giant
            Tortoise fell extinct soon after the arrival of humans to this
            region. The Aldabra Giant Tortoise and the Seychelles Giant Tortoise
            share many characteristics, to the point where much debate has
            arisen as to their true classification.
          </p>
        </div>
      ) : null}
      {SecondPicture ? (
        <div>
          <p className="secondInfo">
            Closely related to its larger cousin, the llama, the two species are
            able to interbreed. Yarn spun from alpaca wool is popular for warm,
            soft sweaters, socks, mittens, and hats, making the fur of these
            domesticated animals a valuable commodityse their tusks to dig holes
            to find water underground
          </p>
        </div>
      ) : null}
      {ThirdPicture ? (
        <div>
          <p className="thirdInfo">
            Arctic foxes (often misspelled as artic fox or artic foxes) are
            small, adorable animals and have natural adaptations protecting them
            from predators and frigid temperatures. According to fossils, Arctic
            foxes got their start in Tibet during the Pliocene Epoch, 2.6
            million years ago, then spread to North America and Eurasia by
            migrating over ice-land bridges. The species is Iceland’s only
            native mammal, and while hundreds of thousands currently roam around
            the Arctic Circle, climate change threatens to decimate populations
            in the coming years.
          </p>
        </div>
      ) : null}
      {ForthPicture ? (
        <div>
          <p className="ForthInfo">
            The avocet bird has a wide distribution near beaches, flats, lakes,
            and ponds around the world. The genus contains four species, each
            with its own geographical distribution. The American Avocet is
            endemic to Mexico, the Western United States, and parts of the
            Atlantic Coast.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default App;
