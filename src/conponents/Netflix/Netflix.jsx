import { useEffect, useState } from "react";
import FocusImg from "../FocusImg.jsx";
import Template from "../Template.jsx";
import netflix from "../../js/netflix/netflix.js";
import netflixTwo from "../../js/netflix/netflixTwo.js";
import netflixThree from "../../js/netflix/netflixThree.js";
import netflixFour from "../../js/netflix/netflixFour.js";

const Netflix = ({ setTitleCurrent, resize, stateFocus, setStateFocus }) => {

  const [stateMain, setStateMain] = useState("");
  const [targetToFocus, settargetToFocus] = useState(null);

  const handleClickOpenFocus = (e) => {
    setStateFocus("focus_img-isOpened");
    settargetToFocus(e.target.currentSrc);
    setStateMain("main_isOpened");
  }
  
  useEffect(() => {
    setTitleCurrent("Selim-DM - Netflix Album");
  }, []);

  return (
    <main className={`main ${stateMain}`}>
    <FocusImg stateFocus={stateFocus} resize={resize} setStateFocus={setStateFocus} img={targetToFocus} setStateMain={setStateMain}/>
      {resize > 0 && resize < 500 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={netflix} cl={"oneCol"} />}
      {resize >= 500 && resize < 700 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={netflixTwo} cl={"twoCol"}/>}
      {resize >= 700 && resize < 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={netflixThree} cl={"threeCol"}/>}
      {resize >= 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={netflixFour} cl={"fourCol"}/>}
    </main>
  );
};
export default Netflix;