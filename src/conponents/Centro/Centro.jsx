import { useEffect, useState } from "react";
import FocusImg from "../FocusImg.jsx";
import OneCol from "./OneCol.jsx";
import TwoCol from "./TwoCol.jsx";
import ThreeCol from "./ThreeCol.jsx";
import FourCol from "./FourCol.jsx";
const Centro = ({ setTitleCurrent }) => {
  const [stateFocus, setStateFocus] = useState("focus_img-isClosed");
  const [stateMain, setStateMain] = useState("");
  const [tagetToFocus, setTagetToFocus] = useState(null);

  const handleClickOpenFocus = (e) => {
    setStateFocus("focus_img-isOpened");
    setTagetToFocus(e.target.currentSrc);
    setStateMain("main_isOpened");
  }
  
  useEffect(() => {
    setTitleCurrent("Selim-DM - Centro Album");
  }, []);

  const [resize, setResize] = useState(window.innerWidth);
  
  const handleResize = () => {
    setResize(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <main className={`main ${stateMain}`}>
      <FocusImg stateFocus={stateFocus} setStateFocus={setStateFocus} img={tagetToFocus} setStateMain={setStateMain}/>
      <FocusImg stateFocus={stateFocus} setStateFocus={setStateFocus} img={tagetToFocus} setStateMain={setStateMain}/>
      {resize > 0 && resize < 500 && <OneCol handleClickOpenFocus={handleClickOpenFocus} />}
      {resize >= 500 && resize < 700 && <TwoCol handleClickOpenFocus={handleClickOpenFocus} />}
      {resize >= 700 && resize < 1000 && <ThreeCol handleClickOpenFocus={handleClickOpenFocus} />}
      {resize >= 1000 && <FourCol handleClickOpenFocus={handleClickOpenFocus} />}
    </main>
  );
};
export default Centro;