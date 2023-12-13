import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Works from './Works.jsx';
import Netflix from './Netflix.jsx';
import Centro from './Centro.jsx';
import Punch from './Punch.jsx';
import '../scss/style.scss';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/works" element={<Works />} />
                <Route path="/netflix" element={<Netflix />} />
                <Route path="/centro" element={<Centro />} />
                <Route path="/punch" element={<Punch />} />
            </Routes>
        </Router>
    )
}

export default App
