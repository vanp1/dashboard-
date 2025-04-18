import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../src/pages/Homepage/Homepage'; // Giả sử bạn có một trang homepage
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; // Giả sử bạn có một trang NotFoundPage

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/not-found" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
        </div>
    );
}

export default App;
