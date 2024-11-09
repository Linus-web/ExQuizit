import { Link } from 'react-router-dom';

const MainPage = () => {
  const quizzes = [
    {link:'aas.json', title: 'AAS Prov', description: 'Frågor för AAS utbildningens prov' },
  ];

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark flex flex-col items-center p-4 text-primary-dark dark:text-primary-light">
      <h1 className="text-4xl font-bold mb-16">Choose a Quiz to Practice</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz) => (
          <Link to={`/quiz/${quiz.link}`} key={quiz.link} className="block">
            <div className="bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold ">{quiz.title}</h2>
              <p className="mt-2">{quiz.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
