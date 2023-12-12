import { useEffect, useState } from "react";

const ImgContainer = ({img}) => {
    const [resize, setResize] = useState(window.innerWidth);
    
    const handleResize = () => {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log(resize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return (
        <div className="img_container">
            <img src={img} alt="" />
        </div>
    );
};
export default ImgContainer;