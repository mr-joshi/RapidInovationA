import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import TaskPage from './pages/TaskPage';
import Header from './components/Header';
import FooterComponent from './components/Footer'

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/task-page" element={<TaskPage />} />
            </Routes>
            <FooterComponent/>
        </Router>
    );
}

export default App;
