// src/App.jsx
import { useState, useEffect } from 'react';
import MainPage from './mainPage';
import FlashcardPage from './flashcardsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className=" font font-mono min-h-screen sm:px-28 md:px-36 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light">
        <header className="p-4 flex justify-between items-center bg-primary dark:bg-darkPrimary">
          <h1 className="text-2xl font-bold">Quiz App</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark  rounded-lg shadow hover:bg-accent dark:hover:bg-darkAccent transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quiz/:quizId" element={<FlashcardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
