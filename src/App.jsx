// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Placeholder page components (we'll make real ones later in src/pages/)
const HomePage = () => (
  <div className="p-6 text-center">
    <h1 className="text-4xl font-bold text-indigo-700 mb-8">Welcome to the CS Platform!</h1>
    <nav className="space-x-6">
      <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out">Teacher Login</Link>
      <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out">Teacher Register</Link>
    </nav>
  </div>
);
const LoginPage = () => <div className="p-6"><h1 className="text-2xl font-semibold">Login Page Placeholder</h1><p className="mt-2"><Link to="/" className="text-indigo-600 hover:underline">Back to Home</Link></p></div>;
const RegisterPage = () => <div className="p-6"><h1 className="text-2xl font-semibold">Teacher Registration Placeholder</h1><p className="mt-2"><Link to="/" className="text-indigo-600 hover:underline">Back to Home</Link></p></div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Teacher Dashboard route will be added in Step 3 */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;