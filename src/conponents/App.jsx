import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../scss/style.scss';
import Header from './Header.jsx';
import Home from './Home/Home.jsx';
import NotFound from './NotFound.jsx';

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
                <Route path="*" element={<NotFound  />} />
            </Routes>
        </Router>
    )
}
export default App;
