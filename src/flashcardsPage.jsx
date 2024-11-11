// src/FlashcardPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './cards.css'

const FlashcardPage = () => {
  const { quizId: link } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch(`/quizzes/${link}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const flashcardArray = Object.values(data.quiz);
        setFlashcards(flashcardArray);
      })
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, [link]);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Link to="/" className="hover:underline absolute fill-primary-dark dark:fill-primary-light self-start">
        <svg width="40px" height="40px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z" />
        </svg>
      </Link>
      <h1 className="md:text-3xl text-xl font-bold mb-8">Quiz Flashcards</h1>
      {flashcards.length > 0 ? (
        <div
          className="flip-card w-full max-w-4xl p-8 rounded-lg flex flex-col items-center"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div className={`flip-card-inner ${showAnswer ? 'show-back' : ''} w-11/12 h-56 sm:h-72 sm:w-full`}>
            {/* Front Side (Question) */}
            <div className="flip-card-front bg-secondary-light dark:bg-secondary-dark p-8 rounded-lg overflow-scroll">
              <h2 className="text-2xl text-center font-semibold mb-4">Question</h2>
              <p className="text-center text-lg">{flashcards[currentIndex].statement}</p>
            </div>
            {/* Back Side (Answer) */}
            <div className="flip-card-back bg-secondary-light dark:bg-secondary-dark p-8 rounded-lg overflow-scroll">
              <h2 className="text-2xl text-center font-semibold mb-4">Answer</h2>
              <p className="text-center text-lg">{flashcards[currentIndex].Answer}</p>
            </div>
          </div>
          {/* Counter */}
          <div className="mt-4">
            Flashcard {currentIndex + 1} of {flashcards.length}
          </div>
        </div>
      ) : (
        <p>Loading flashcards...</p>
      )}
      <div className="mt-8 flex space-x-4 text-primary-light dark:text-primary-dark">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 font-semibold bg-tertiary-light dark:bg-tertiary-dark rounded-lg shadow transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 font-semibold bg-tertiary-light dark:bg-tertiary-dark rounded-lg shadow transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardPage;
