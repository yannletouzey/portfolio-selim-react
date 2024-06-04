import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../scss/style.scss';
import Header from './Header.jsx';
import Home from './Home/Home.jsx';
import NotFound from './NotFound.jsx';
import Footer from './Footer.jsx';
import Works from './Works.jsx';
import Netflix from './Netflix/Netflix.jsx';
import Centro from './Centro/Centro.jsx';
import Punch from './Punch/Punch.jsx';
import About from './About.jsx';
import Main from './Main.jsx';

export default function App() {
  const [stateFocus, setStateFocus] = useState("focus_img-isClosed");

  const [titleCurrent, setTitleCurrent] = useState("");
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

  useEffect(() => {
    document.title = titleCurrent;
  }, [titleCurrent]);


  return (
    <Router>
      <Header />
      <Main setTitleCurrent={setTitleCurrent} resize={resize} stateFocus={stateFocus} setStateFocus={setStateFocus} />
      <Footer />
    </Router>
  )
}