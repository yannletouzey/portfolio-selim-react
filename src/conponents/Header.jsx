import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [resize, setResize] = useState(window.innerWidth);

    const handleResize = () => {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (resize > 500) {
            setOpenBurger("burger burger_is-closed");
            setOpenContact("contact contact_is-closed");
            setOpenTitle("title_is-open");
            addEventListener('resize', () => {
                setOpenBurger("burger burger_is-closed");
                setOpenContact("contact contact_is-closed");
                setOpenTitle("title_is-open");
            })
        }
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const [openBurger, setOpenBurger] = useState("burger burger_is-closed");
    const [openContact, setOpenContact] = useState("contact contact_is-closed");
    const [openTitle, setOpenTitle] = useState("title_is-open");

    const handleClick = () => {
        openBurger === "burger burger_is-closed" ? setOpenBurger("burger burger_is-open") : setOpenBurger("burger burger_is-closed");
        openContact === "contact contact_is-closed" ? setOpenContact("contact contact_is-open") : setOpenContact("contact contact_is-closed");
        openTitle === "title_is-open" ? setOpenTitle("title_is-closed") : setOpenTitle("title_is-open");
    }

    const contactRef = useRef(null);

    useEffect(() => {
        const widthContact = contactRef.current.getBoundingClientRect().width;
        const contact = document.querySelector(".contact");
        const burger = document.querySelector(".burger");
        if (openBurger === "burger burger_is-open") {
            burger.style.transform = `translateX(-${widthContact}px) rotate(-360deg)`;
            contact.style.transform = `translateX(-${widthContact}px)`;
        } else {
            burger.style.transform = `translateX(0) rotate(0deg)`;
            contact.style.transform = `translateX(0)`;
        }
    }, [openBurger])

    return (
        <header className="header">
            <h1 className="header_title">
                <Link to="/" className="header_title__link">Selim<span className={openTitle}>-DM</span></Link>
            </h1>
            <div className={openBurger} onClick={handleClick}><span></span></div>
            <div className={openContact} ref={contactRef}>
                <Link to="/works" className="header_title__link">Works</Link>
                <a href="https://www.instagram.com/selimdm/?hl=fr" target="_blank" rel="noopener noreferrer">Insta<span>gram</span></a>
                <a href="https://wa.me/33679101004" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
        </header>
    );
};
export default Header;