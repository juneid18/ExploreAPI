'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function TheCatAPIPage() {
  const [catImage, setCatImage] = useState(null); // Random cat image URL
  const [catFact, setCatFact] = useState(''); // Random cat fact
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for The Cat API
  const apiUrl = 'https://api.thecatapi.com/v1/images/search'; // Example API URL
  const factUrl = 'https://meowfacts.herokuapp.com/'; // API URL for random cat facts

  // Fetch a random cat image and fact
  const fetchCatData = async () => {
    setLoading(true);
    setError('');
    try {
      // Fetch the cat image
      const imageResponse = await axios.get(apiUrl);
      setCatImage(imageResponse.data[0].url);

      // Fetch the cat fact
      const factResponse = await axios.get(factUrl);
      setCatFact(factResponse.data.data[0]);
    } catch (err) {
      setError('Error fetching data from The Cat API');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">The Cat API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch random cat images and facts using The Cat API. Click below to get a random cat and fact.
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://api.thecatapi.com/v1/images/search</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Cat API provides random cat images and facts. You can fetch a random image of a cat as well as fun cat facts from the API.
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "url": "https://cdn2.thecatapi.com/images/d7h.jpg"
}
                `}
              </pre>
            </div>

            {/* Fetch Data Button */}
            <div className="flex justify-center items-center mb-6">
              <button
                onClick={fetchCatData}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Fetch Random Cat and Fact
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

          {/* Display Cat Image and Fact */}
          {catImage && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Random Cat Image</h2>
              <img
                src={catImage}
                alt="Random Cat"
                className="w-64 h-64 object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-secondary mb-4">Cat Fact</h2>
              <p className="text-gray-700">{catFact}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
