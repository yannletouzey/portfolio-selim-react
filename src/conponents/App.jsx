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
function App() {

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
        <Routes>
          <Route path="/" element={<Home setTitleCurrent={setTitleCurrent} resize={resize} />} />
          <Route path="/works" element={<Works setTitleCurrent={setTitleCurrent} />} />
          <Route path="/netflix" element={<Netflix setTitleCurrent={setTitleCurrent} resize={resize} />} />
          <Route path="/centro" element={<Centro setTitleCurrent={setTitleCurrent} resize={resize} />} />
          <Route path="/punch" element={<Punch setTitleCurrent={setTitleCurrent} resize={resize} />} />
          <Route path="*" element={<NotFound  />} />
        </Routes>
      <Footer />
    </Router>
  )
}
export default App;
