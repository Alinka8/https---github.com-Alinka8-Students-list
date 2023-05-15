import "./studentProfile.style.css";
import React from "react";
import boyImg from "../../assets/images/boy.jpg";
import girlImg from "../../assets/images/girl.jpg";
import muratImg from "../../assets/images/murat.jpg";
import aidinaImg from "../../assets/images/aidina.jpg";
import alinaImg from "../../assets/images/alina.jpg";
import shahzodImg from "../../assets/images/shahzod.jpg";
import elnuraImg from "../../assets/images/elnura.jpg";
import tinkImg from "../../assets/images/tink.jpg";

const studentList = [
  {
    name: "Tomasz",
    email: "tomasz.gmail.com",
    lifemoto: "You do not find the happy life. You make it.",
    imgSource: boyImg,
  },
  {
    name: "Esma",
    email: "esma.gmail.com",
    lifemoto: "The most wasted of days is one without laughter.",
    imgSource: girlImg,
  },
  {
    name: "Shahzod",
    email: "shahzod.gmail.com",
    lifemoto: "Stay close to anything that makes you glad you are alive.",
    imgSource: shahzodImg,
  },
  {
    name: "Aidina",
    email: "aidina.gmail.com",
    lifemoto: "Make each day your masterpiece.",
    imgSource: aidinaImg,
  },
  {
    name: "Tink",
    email: "tink.gmail.com",
    lifemoto: "Happiness is not by chance, but by choice.",
    imgSource: tinkImg,
  },
  {
    name: "Elnura",
    email: "elnura.gmail.com",
    lifemoto:
      "Life changes very quickly, in a very positive way, if you let it.",
    imgSource: elnuraImg,
  },
  {
    name: "Alina",
    email: "alina.gmail.com",
    lifemoto: "Keep your face to the sunshine and you cannot see a shadow.",
    imgSource: alinaImg,
  },
  {
    name: "Murat",
    email: "murat.gmail.com",
    lifemoto: "Impossible is for the unwilling.",
    imgSource: muratImg,
  },
];

const showAllInfo = studentList.map((el, index) => {
  return (
    <div className="card">
      <img src={el.imgSource} />
      <ul>
        <li>{el.name} </li>
        <li>{el.email}</li>
        <li>{el.lifemoto}</li>
      </ul>
      <button className="button"> click me </button>
    </div>
  );
});

function StudentProfile() {
  return <div className="container">{showAllInfo}</div>;
}

export default StudentProfile;
