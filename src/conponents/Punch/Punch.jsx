import { useEffect, useState } from "react";
import FocusImg from "../FocusImg.jsx";
import Template from "../Template.jsx";
import punch from "../../js/punch/punch.js";
import punchTwo from "../../js/punch/punchTwo.js";
import punchThree from "../../js/punch/punchThree.js";
import punchFour from "../../js/punch/punchFour.js";

export default function Punch({ setTitleCurrent, resize, stateFocus, setStateFocus }) {

  const [stateMain, setStateMain] = useState("");
  const [targetToFocus, settargetToFocus] = useState(null);

  const handleClickOpenFocus = (e) => {
    setStateFocus("focus_img-isOpened");
    settargetToFocus(e.target.currentSrc);
    setStateMain("main_isOpened");
  }
  
  useEffect(() => {
    setTitleCurrent("Selim-DM - Punch Album");
  }, []);

  return (
    <main className={`main ${stateMain}`}>
      <FocusImg stateFocus={stateFocus} resize={resize} setStateFocus={setStateFocus} img={targetToFocus} setStateMain={setStateMain}/>
      {resize > 0 && resize < 500 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={punch} cl={"oneCol"} />}
      {resize >= 500 && resize < 700 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={punchTwo} cl={"twoCol"}/>}
      {resize >= 700 && resize < 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={punchThree} cl={"threeCol"}/>}
      {resize >= 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={punchFour} cl={"fourCol"}/>}
    </main>
  );
};