import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Works from './Works.jsx';
import Netflix from './Netflix/Netflix.jsx';
import Centro from './Centro/Centro.jsx';
import Punch from './Punch/Punch.jsx';
import About from './About.jsx';
import Home from './Home/Home.jsx';
import NotFound from "./NotFound.jsx";

const Main = ({ setTitleCurrent, resize, stateFocus, setStateFocus }) => {

  const [stateMain, setStateMain] = useState("");
  const location = useLocation();
  useEffect(() => {
    location.pathname === '/works' ? setStateMain("main_work") : setStateMain("");
  }, [stateMain, location]);
  
  return (
    <main className={`main ${stateMain}`}>
      <Routes>
        <Route path="/" element={<Home setTitleCurrent={setTitleCurrent} resize={resize} stateFocus={stateFocus} setStateFocus={setStateFocus} setStateMain={setStateMain} />} />
        <Route path="/works" element={<Works setTitleCurrent={setTitleCurrent} stateFocus={stateFocus} setStateFocus={setStateFocus} setStateMain={setStateMain} />} />
        <Route path="/netflix" element={<Netflix setTitleCurrent={setTitleCurrent} resize={resize} stateFocus={stateFocus} setStateFocus={setStateFocus} setStateMain={setStateMain} />} />
        <Route path="/centro" element={<Centro setTitleCurrent={setTitleCurrent} resize={resize} stateFocus={stateFocus} setStateFocus={setStateFocus} setStateMain={setStateMain} />} />
        <Route path="/punch" element={<Punch setTitleCurrent={setTitleCurrent} resize={resize} stateFocus={stateFocus} setStateFocus={setStateFocus} setStateMain={setStateMain} />} />
        <Route path="/about" element={<About setTitleCurrent={setTitleCurrent} resize={resize} stateFocus={stateFocus} setStateFocus={setStateFocus} setStateMain={setStateMain} />} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </main>
  );
};
export default Main;