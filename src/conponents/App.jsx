import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Works from './Works.jsx';
import Netflix from './Netflix.jsx';
import Centro from './Centro.jsx';
import Punch from './Punch.jsx';
import { useEffect, useState } from 'react';
import '../scss/style.scss';

function App() {

    const [titleCurrent, setTitleCurrent] = useState("");

    useEffect(() => {
        document.title = titleCurrent;
    }, [titleCurrent]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main setTitleCurrent={setTitleCurrent} />} />
                <Route path="/works" element={<Works setTitleCurrent={setTitleCurrent} />} />
                <Route path="/netflix" element={<Netflix setTitleCurrent={setTitleCurrent} />} />
                <Route path="/centro" element={<Centro setTitleCurrent={setTitleCurrent} />} />
                <Route path="/punch" element={<Punch setTitleCurrent={setTitleCurrent} />} />
            </Routes>
        </Router>
    )
}
export default App;
