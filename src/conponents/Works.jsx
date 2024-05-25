import { Link } from 'react-router-dom';
import { useEffect, } from 'react';

const Works = ({ setTitleCurrent }) => {

  const handleHover = (e) => {
    e.currentTarget.children[0].style.mixBlendMode = 'difference';
    e.currentTarget.children[1].style.height = '100%';
  }
  const handleLeave = (e) => {
    e.currentTarget.children[0].style.mixBlendMode = 'none';
    e.currentTarget.children[1].style.height = '0%';
  }
  
  useEffect(() => {
    setTitleCurrent("Selim-DM - Works");
  }, []);

  return (
    <main className="main main_work">
      <div className="link_container" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <Link to="/netflix" className="link_container-link">Netflix</Link>
        <div className='cube-hover'></div>
      </div>
      <div className="link_container" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <Link to="/punch" className="link_container-link">Punch</Link>
        <div className='cube-hover'></div>
      </div>
      <div className="link_container" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <Link to="/centro" className="link_container-link">Centro</Link>
        <div className='cube-hover'></div>
      </div>
    </main>
  )
}
export default Works;
