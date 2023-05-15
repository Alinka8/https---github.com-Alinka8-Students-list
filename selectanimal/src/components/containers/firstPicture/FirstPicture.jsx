import "./firstPicture.style.css";

const FirstPicture = ({ type, source, onClickHandler }) => {
  return (  
    <img className={type} src={"C:\Users\Admin\Desktop\react project\selectanimal\src\components\containers\firstPicture\shutterstock_1275987829.jpg"} alt="" onClick={onClickHandler}></img>
    );
};

export default FirstPicture;
