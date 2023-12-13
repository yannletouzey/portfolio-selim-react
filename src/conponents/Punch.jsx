import { useEffect, useState } from "react";
import punchImg from '../js/punchImg.js';
import FocusImg from "./FocusImg.jsx";

const Punch = ({ setTitleCurrent }) => {
    const [stateFocus, setStateFocus] = useState("focus_img-isClosed");
    const [stateMain, setStateMain] = useState("");
    const [tagetToFocus, setTagetToFocus] = useState(null);

    const handleClickOpenFocus = (e) => {
        setStateFocus("focus_img-isOpened");
        setTagetToFocus(e.target.currentSrc);
        setStateMain("main_isOpened");
    }
    
    useEffect(() => {
        setTitleCurrent("Selim-DM - Punch Album");
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
            {punchImg[0].map((item, i) => {
                return (
                    <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </main>
    );
};
export default Punch;
