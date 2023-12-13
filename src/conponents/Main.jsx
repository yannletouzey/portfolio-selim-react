import { useEffect, useState } from "react";
import personalImg from '../js/personalImg.js';
import FocusImg from "./FocusImg.jsx";

const Main = ({ setTitleCurrent }) => {
    const [stateFocus, setStateFocus] = useState("focus_img-isClosed");
    const [stateMain, setStateMain] = useState("");
    const [tagetToFocus, setTagetToFocus] = useState(null);

    const handleClickOpenFocus = (e) => {
        setStateFocus("focus_img-isOpened");
        setTagetToFocus(e.target.currentSrc);
        setStateMain("main_isOpened");
    }

    useEffect(() => {
        setTitleCurrent("Selim-DM - Portfolio");
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
            {personalImg[0].map((item, i) => {
                return (
                    <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </main>
    )
}
export default Main;