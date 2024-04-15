import { useEffect, useState } from "react";
import FocusImg from "../FocusImg.jsx";
import FourCol from "./FourCol.jsx";
import OneCol from "./OneCol.jsx";
import ThreeCol from "./ThreeCol.jsx";
import TwoCol from "./TwoCol.jsx";

const Home = ({ setTitleCurrent, resize, stateFocus, setStateFocus }) => {

  const [stateMain, setStateMain] = useState("");
  const [targetToFocus, settargetToFocus] = useState(null);

  const handleClickOpenFocus = (e) => {
    setStateFocus("focus_img-isOpened");
    settargetToFocus(e.target.currentSrc);
    setStateMain("main_isOpened");
  }

  useEffect(() => {
    setTitleCurrent("Selim-DM - photo Album");
  }, []);
  
  return (
    <main className={`main ${stateMain}`}>
      <FocusImg stateFocus={stateFocus} resize={resize} setStateFocus={setStateFocus} img={targetToFocus} setStateMain={setStateMain}/>
      {resize > 0 && resize < 500 && <OneCol handleClickOpenFocus={handleClickOpenFocus} />}
      {resize >= 500 && resize < 700 && <TwoCol handleClickOpenFocus={handleClickOpenFocus} />}
      {resize >= 700 && resize < 1000 && <ThreeCol handleClickOpenFocus={handleClickOpenFocus} />}
      {resize >= 1000 && <FourCol handleClickOpenFocus={handleClickOpenFocus} />}
    </main>
  );
};
export default Home;