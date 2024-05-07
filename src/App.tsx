import React from 'react';
import './styles/global.scss';
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<LandingPage />} />
                        <Route path="*" element={<LandingPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
