'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '@/components/NavBar'; // Your NavBar Component
import Footer from '@/components/Footer'; // Your Footer Component
import JsonData from '@/components/JsonData'; // Component to show the JSON Response

export default function UniversityApiPage() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [country, setCountry] = useState('United States'); // Default Country

  const apiUrl = `https://universities.hipolabs.com/search?country=${country}`;

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(apiUrl);
        setUniversities(response.data);
      } catch (err) {
        setError('Error fetching universities.');
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [country]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-primary text-tertiary py-10">
        <div className="container mx-auto px-6 space-y-10">
          {/* API Info Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">University API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch a list of universities based on the country using the University API.
            </p>

            {/* Select Country */}
            <div className="mb-6">
              <select
                onChange={(e) => setCountry(e.target.value)}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
              <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
            </div>
          )}

          {/* Display Universities */}
          {!loading && universities.length > 0 && (
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary mb-4">Universities in {country}</h2>
              <ul className="list-disc pl-6 space-y-2">
                {universities.map((university) => (
                  <li key={university.name} className="text-lg font-semibold text-secondary">
                    <a
                      href={university.web_pages[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {university.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
            </div>
          )}

          {/* Show API Response as JSON */}
          <JsonData data={universities} />
        </div>
      </div>
      <Footer />
    </>
  );
}
