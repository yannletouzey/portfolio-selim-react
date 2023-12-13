import { useEffect, useState } from "react";
import personalImg from '../js/personalImg.js';
const Main = ({ setTitleCurrent }) => {
    
    useEffect(() => {
        setTitleCurrent("Selim-DM - Portfolio");
    }, []);

    const [resize, setResize] = useState(window.innerWidth);
    
    const handleResize = () => {
        setResize(window.innerWidth);
    }
    useEffect(() => {
    //    setTitleCurrent("Portfolio");
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <main className="main">
            {personalImg[0].map((item, i) => {
                return (
                    <div key={i} className="img_container">
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </main>
    )
}
export default Main;