'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function JokeAPIPage() {
  const [joke, setJoke] = useState(''); // Store fetched joke
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for JokeAPI
  const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  // Fetch Joke
  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl);
      if (response.data.type === 'single') {
        setJoke(response.data.joke); // Single-line joke
      } else {
        setJoke(`${response.data.setup} - ${response.data.delivery}`); // Setup and delivery for multi-line joke
      }
    } catch (err) {
      setError('Error fetching joke. Please try again.');
      setJoke('');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">JokeAPI</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch a random joke from the JokeAPI. Click below to get a joke!
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://v2.jokeapi.dev/joke/Any</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The JokeAPI allows you to fetch a random joke. The joke could either be a single line or a setup/delivery type joke.
              </p>

            </div>

            {/* Fetch Joke Button */}
            <div className="mb-6">
              <button
                onClick={fetchJoke}
                className="ml-4 px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get a Joke
              </button>
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

          {/* Display Joke */}
          {joke && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Here's a Joke for You:</h2>
              <p className="text-lg text-gray-700">{joke}</p>
            </div>
          )}
          {joke && (
            <JsonData data={joke} />
          )
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
