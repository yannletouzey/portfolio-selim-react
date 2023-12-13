import { useEffect, useState } from "react";
import punchImg from '../js/punchImg.js';

const PunchMain = () => {
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
            {punchImg[0].map((item, i) => {
                return (
                    <div key={i} className="img_container">
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
        </main>
    );
};
export default PunchMain;
