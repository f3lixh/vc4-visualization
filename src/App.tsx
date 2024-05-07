import React from 'react';
import './styles/global.scss';
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import TaskOne from "./pages/TaskOne/TaskOne";
import ChartOne from "./components/TaskOne/ChartOne";
import ChartTwo from "./components/TaskOne/ChartTwo";
import ChartThree from "./components/TaskOne/ChartThree";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<LandingPage />} />
                        <Route path="*" element={<LandingPage />} />
                        <Route path="aufgabe-1" element={<TaskOne />}>
                            <Route index element={<Navigate to="teil-1" replace />} />
                            <Route path="teil-1" element={<ChartOne />} />
                            <Route path="teil-2" element={<ChartTwo />} />
                            <Route path="teil-3" element={<ChartThree />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
