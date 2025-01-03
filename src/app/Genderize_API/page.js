'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function GenderizeAPIPage() {
  const [name, setName] = useState(''); // Name input from user
  const [gender, setGender] = useState(null); // Gender prediction
  const [probability, setProbability] = useState(null); // Probability of prediction
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Genderize API URL
  const apiUrl = 'https://api.genderize.io';

  // Function to fetch gender prediction
  const fetchGender = async () => {
    if (!name) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl, {
        params: { name: name },
      });
      setGender(response.data.gender); // Gender prediction
      setProbability(response.data.probability); // Prediction probability
    } catch (err) {
      setError('Error fetching gender data. Please try again.');
      setGender(null);
      setProbability(null);
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Genderize API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Predict the gender of a name using the Genderize API. Enter a name to get the gender prediction.
            </p>

            {/* Input for Name */}
            <div className="mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-56"
                placeholder="Enter a name"
              />
            </div>

            {/* Button to Fetch Gender */}
            <div className="mb-6">
              <button
                onClick={fetchGender}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Predict Gender
              </button>
            </div>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://api.genderize.io?name={name}</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Genderize API provides a gender prediction based on the input name. The result includes the predicted gender and the probability of the prediction.
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "name": "John",
  "gender": "male",
  "probability": 0.99
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

          {/* Display Gender Prediction */}
          {gender && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Gender Prediction</h2>
              <p className="text-lg font-semibold text-secondary">Predicted Gender: {gender}</p>
              <p className="text-lg font-semibold text-secondary">
                Probability: {probability ? (probability * 100).toFixed(2) + '%' : 'N/A'}
              </p>
            </div>
          )}
          {gender && (
            <JsonData data={gender} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
