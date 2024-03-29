import { Link } from 'react-router-dom';
import netflixLogo from '../assets/img/logo/netflix.png';
import punchLogo from '../assets/img/logo/punch.png';
import centroLogo from '../assets/img/logo/centro.png';
import { useEffect } from 'react';

const Works = ({ setTitleCurrent }) => {
  
  useEffect(() => {
    setTitleCurrent("Selim-DM - Works");
  }, []);

  return (
    <main className="main main_work">
      <Link to="/netflix" className="header_title__link"><img src={netflixLogo} alt="Logo de Netflix"/></Link>
      <Link to="/punch" className="header_title__link"><img src={punchLogo} alt="Logo de Punch"/></Link>
      <Link to="/centro" className="header_title__link"><img src={centroLogo} alt="Logo de Centro"/></Link>
    </main>
  )
}
export default Works;
