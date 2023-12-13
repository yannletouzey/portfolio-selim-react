import { useEffect, useState } from "react";
import netflixImg from '../js/netflixImg.js';

const NetflixMain = ({ setTitleCurrent }) => {
    
    useEffect(() => {
        setTitleCurrent("Selim-DM - Netflix Album");
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
        <main className="main">
            {netflixImg[0].map((item, i) => {
                return (
                    <div key={i} className="img_container">
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </main>
    );
};
export default NetflixMain;