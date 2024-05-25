import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Works = ({ setTitleCurrent }) => {
  const pages = ['Netflix', 'Punch', 'Centro'];

  const pageRefs = pages.map((page, index) => useRef(null));
  const mainRef = useRef(null);
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
    <main ref={mainRef} className="main main_work">
      {pages.map((page, index) => (
        <div className="link_container" key={index} ref={pageRefs[index]} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <Link to={`/${page}`} className="link_container-link">{page}</Link>
          <div className='cube-hover'></div>
        </div>
      ))}
    </main>
  )
}
export default Works;
