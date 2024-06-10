import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import TaskPage from './pages/TaskPage';
import FooterComponent from './components/Footer'
import Header from './components/Header';

function App() {
    const location = useLocation();
console.log(location.pathname==='/')
    return (
        <>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/task-page" element={<TaskPage />} />
            </Routes>
            <FooterComponent />
        </>
    );
}

export default App;
