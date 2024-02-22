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

  useEffect(() => {
    document.title = titleCurrent;
  }, [titleCurrent]);

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home setTitleCurrent={setTitleCurrent} />} />
          <Route path="/works" element={<Works setTitleCurrent={setTitleCurrent} />} />
          <Route path="/netflix" element={<Netflix setTitleCurrent={setTitleCurrent} />} />
          <Route path="/centro" element={<Centro setTitleCurrent={setTitleCurrent} />} />
          <Route path="/punch" element={<Punch setTitleCurrent={setTitleCurrent} />} />
          <Route path="*" element={<NotFound  />} />
        </Routes>
      <Footer />
    </Router>
  )
}
export default App;
