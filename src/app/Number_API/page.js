'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function NumberAPIPage() {
  const [number, setNumber] = useState(''); // Number input from user
  const [trivia, setTrivia] = useState(''); // Trivia result for the number
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Number API URL
  const apiUrl = 'http://numbersapi.com';

  // Function to fetch trivia for the number
  const fetchTrivia = async () => {
    if (!number) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${apiUrl}/${number}?json`);
      setTrivia(response.data.text); // Trivia text for the number
    } catch (err) {
      setError('Error fetching number trivia. Please try again.');
      setTrivia('');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Number API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Get trivia and facts about a number using the Number API. Enter a number to fetch its trivia.
            </p>

            {/* Input for Number */}
            <div className="mb-6">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-56"
                placeholder="Enter a number"
              />
            </div>

            {/* Button to Fetch Trivia */}
            <div className="mb-6">
              <button
                onClick={fetchTrivia}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get Trivia
              </button>
            </div>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">http://numbersapi.com/{number}?json</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Number API provides interesting trivia about a number. It returns a random or fact-based trivia about the number, depending on the query parameters.
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "text": "197 is a prime number.",
  "number": 197,
  "found": true,
  "type": "trivia"
}
                `}
              </pre>
            </div>
          </div>

          {/* Display Error Message */}
          {error && (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
              <h1 className="text-red-600 text-2xl font-semibold">{error}</h1>
            </div>
          )}

          {/* Display Loading State */}
          {loading && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
            </div>
          )}

          {/* Display Trivia Result */}
          {trivia && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Trivia for {number}</h2>
              <p className="text-lg font-semibold text-secondary">{trivia}</p>
            </div>
          )}
          {number && (
            <JsonData data={number} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
