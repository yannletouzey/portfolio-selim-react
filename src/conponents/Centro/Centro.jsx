import { useEffect, useState } from "react";
import FocusImg from "../FocusImg.jsx";
import Template from "../Template.jsx";
import centro from "../../js/centro/centro.js";
import centroTwo from "../../js/centro/centroTwo.js";
import centroThree from "../../js/centro/centroThree.js";
import centroFour from "../../js/centro/centroFour.js";

export default function Centro({ setTitleCurrent, resize, stateFocus, setStateFocus }) {

  const [stateMain, setStateMain] = useState("");
  const [targetToFocus, settargetToFocus] = useState(null);

  const handleClickOpenFocus = (e) => {
    setStateFocus("focus_img-isOpened");
    settargetToFocus(e.target.currentSrc);
    setStateMain("main_isOpened");
  }
  
  useEffect(() => {
    setTitleCurrent("Selim-DM - centro Album");
  }, []);

  return (
    <main className={`main ${stateMain}`}>
    <FocusImg stateFocus={stateFocus} resize={resize} setStateFocus={setStateFocus} img={targetToFocus} setStateMain={setStateMain}/>
      {resize > 0 && resize < 500 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={centro} cl={"oneCol"} />}
      {resize >= 500 && resize < 700 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={centroTwo} cl={"twoCol"}/>}
      {resize >= 700 && resize < 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={centroThree} cl={"threeCol"}/>}
      {resize >= 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={centroFour} cl={"fourCol"}/>}
    </main>
  );
};