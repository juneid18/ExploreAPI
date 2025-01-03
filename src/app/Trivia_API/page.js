'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function TriviaPage() {
  const [category, setCategory] = useState('9'); // Default category is General Knowledge
  const [questions, setQuestions] = useState([]); // Trivia questions fetched from API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for Trivia API
  const apiUrl = 'https://opentdb.com/api.php'; // Base URL for the Trivia API

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl, {
        params: {
          amount: 10, // Number of questions
          category, // Category id
          type: 'multiple', // Question type (multiple choice)
        },
      });
      setQuestions(response.data.results);
    } catch (err) {
      setError('Error fetching trivia questions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-primary text-tertiary py-10">
        <div className="container mx-auto px-6 space-y-10">
          {/* API Info Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Trivia API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch random trivia questions from the Trivia API. Select a category to start.
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://opentdb.com/api.php</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Trivia API allows you to fetch trivia questions across various categories. You can specify the number of questions, category, and type of questions (multiple choice or true/false).
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "response_code": 0,
  "results": [
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the capital of France?",
      "correct_answer": "Paris",
      "incorrect_answers": ["Berlin", "Madrid", "Rome"]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the largest planet in our solar system?",
      "correct_answer": "Jupiter",
      "incorrect_answers": ["Earth", "Mars", "Venus"]
    }
  ]
}
                `}
              </pre>
            </div>

            {/* Category Selector and Search */}
            <div className="flex justify-center items-center mb-6">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 mr-4"
              >
                <option value="9">General Knowledge</option>
                <option value="11">Entertainment: Film</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="18">Science: Computers</option>
                <option value="22">Geography</option>
                {/* Add more categories as needed */}
              </select>
              <button
                onClick={handleSearch}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get Trivia
              </button>
            </div>
          </div>

          {/* Display Error Message */}
          {error && (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
              <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
            </div>
          )}

          {/* Display Loading State */}
          {loading && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
            </div>
          )}

          {/* Display Trivia Questions */}
          {questions.length > 0 && (
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h2 className="text-2xl font-semibold text-secondary mb-4">{question.question}</h2>
                  <div className="space-y-2">
                    {shuffleOptions([question.correct_answer, ...question.incorrect_answers]).map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={`question-${index}-option-${idx}`}
                          name={`question-${index}`}
                          value={option}
                          className="form-radio"
                        />
                        <label
                          htmlFor={`question-${index}-option-${idx}`}
                          className="text-lg text-gray-700"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );

  // Shuffle the options to randomize the answer positions
  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]]; // Swap elements
    }
    return options;
  }
}
