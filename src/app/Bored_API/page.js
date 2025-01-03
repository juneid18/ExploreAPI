'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function BoredAPIPage() {
  const [activity, setActivity] = useState(''); // Random activity fetched from API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Bored API URL
  const apiUrl = 'https://bored-api.appbrewery.com/random';

  // Function to fetch a random activity
  const fetchActivity = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl);
      setActivity(response.activity);
      console.log(activity);
      
    } catch (err) {
      setError('Error fetching activity. Please try again.');
      setActivity('');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Bored API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Get random activities to help you pass the time using the Bored API. Click the button below to fetch a new activity.
            </p>

            {/* Button to Fetch Activity */}
            <div className="mb-6">
              <button
                onClick={fetchActivity}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get Random Activity
              </button>
            </div>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://bored-api.appbrewery.com/random</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Bored API provides random activity suggestions to help alleviate boredom. Each time you hit the endpoint, you'll receive a new suggestion.
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "activity": "Make a bucket list",
  "availability": 0,
  "type": "busywork",
  "participants": 1,
  "price": 0,
  "accessibility": "Few to no challenges",
  "duration": "minutes",
  "kidFriendly": true,
  "link": "",
  "key": "2735499"
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

          {/* Display Activity */}
          {activity && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Your Activity</h2>
              <p className="text-lg font-semibold text-secondary">{activity}</p>
            </div>
          )}
          {activity && (
            <JsonData data={activity} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
