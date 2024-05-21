import React from 'react';
import './styles/global.scss';
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import TaskOne from "./pages/TaskOne/TaskOne";
import TaskTwo from "./pages/TaskTwo/TaskTwo";
import ChartOne from "./components/TaskOne/ChartOne";
import ChartTwo from "./components/TaskOne/ChartTwo";
import ChartThree from "./components/TaskOne/ChartThree";
import Auswertung from "./components/Auswertung/Auswertung";

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
                        <Route path="aufgabe-2" element={<TaskTwo />} />
                        <Route path="auswertung-2" element={<Auswertung />} />

                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
