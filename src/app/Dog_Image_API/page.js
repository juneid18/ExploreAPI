'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function DogImageAPIPage() {
  const [dogImage, setDogImage] = useState(null); // Store dog image URL
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for Dog CEO's Dog API
  const apiUrl = 'https://dog.ceo/api/breeds/image/random';

  // Function to fetch a random dog image
  const fetchDogImage = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl);
      setDogImage(response.data.message); // Store the dog image URL
    } catch (err) {
      setError('Error fetching dog image. Please try again.');
      setDogImage(null);
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Dog Image API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch a random dog image using the Dog CEO's Dog API. Click the button below to see a new dog image!
            </p>

            {/* Button to Fetch Dog Image */}
            <div className="mb-6">
              <button
                onClick={fetchDogImage}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get Random Dog Image
              </button>
            </div>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://dog.ceo/api/breeds/image/random</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Dog CEO's Dog API allows you to fetch random dog images. This endpoint returns a random image URL for a dog breed.
              </p>

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

          {/* Display Dog Image */}
          {dogImage && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Random Dog Image</h2>
              <div className="text-center">
                <img
                  src={dogImage}
                  alt="Random Dog"
                  className="w-96 h-96 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
            </div>
          )}
          {dogImage && (
            <JsonData data={dogImage} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
