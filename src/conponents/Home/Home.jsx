import { useEffect, useState } from "react";
import FocusImg from "../FocusImg.jsx";
import Template from "../Template.jsx";
import personal from "../../js/home/personal.js";
import personalTwo from "../../js/home/personalTwo.js";
import personalThree from "../../js/home/personalThree.js";
import personalFour from "../../js/home/personalFour.js";

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
      {resize > 0 && resize < 500 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={personal} cl={"oneCol"}/>}
      {resize >= 500 && resize < 700 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={personalTwo} cl={"twoCol"}/>}
      {resize >= 700 && resize < 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={personalThree} cl={"threeCol"} />}
      {resize >= 1000 && <Template handleClickOpenFocus={handleClickOpenFocus} dataImg={personalFour} cl={"fourCol"} />}
    </main>
  );
};
export default Home;