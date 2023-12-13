import { useEffect, useState } from "react";
import centroImg from '../js/centroImg.js';

const CentroMain = ({ setTitleCurrent }) => {
    
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
        <main className="main">
            {centroImg[0].map((item, i) => {
                return (
                    <div key={i} className="img_container">
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </main>
    );
};
export default CentroMain;