import { Link } from 'react-router-dom';

const WorksMain = () => {
    return (
        <main className="main">
            <Link to="/netflix" className="header_title__link">Netflix</Link>
            <Link to="/punch" className="header_title__link">Punch</Link>
            <Link to="/centro" className="header_title__link">Centro</Link>
        </main>
    )
}
export default WorksMain;