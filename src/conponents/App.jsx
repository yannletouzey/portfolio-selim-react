import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import WorksMain from './WorksMain.jsx';
import '../scss/style.scss';
import NetflixMain from './NetflixMain.jsx';
import CentroMain from './CentroMain.jsx';
import PunchMain from './PunchMain.jsx';

function App() {

  return (
    <>
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/works" element={<WorksMain />} />
              <Route path="/netflix" element={<NetflixMain />} />
              <Route path="/centro" element={<CentroMain />} />
              <Route path="/punch" element={<PunchMain />} />
          </Routes>
      </Router>
      
    </>
  )
}

export default App
