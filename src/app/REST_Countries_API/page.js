'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function RestCountriesAPIPage() {
  const [country, setCountry] = useState(null); // Store country data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [countryName, setCountryName] = useState(''); // Input state for country search

  // API URL for REST Countries API
  const apiUrl = 'https://restcountries.com/v3.1/name/';

  // Function to fetch country data based on country name
  const fetchCountryData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${apiUrl}${countryName}`);
      setCountry(response.data[0]); // Store the first country's data
    } catch (err) {
      setError('Error fetching country data. Please try again.');
      setCountry(null);
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
            <h1 className="text-4xl font-bold text-secondary mb-4">REST Countries API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch country details by name from the REST Countries API. Enter a country name to get its details.
            </p>

            {/* Input Field for Country Name */}
            <div className="mb-6">
              <input
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Enter Country Name"
                className="px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            {/* Button to Fetch Country Data */}
            <div className="mb-6">
              <button
                onClick={fetchCountryData}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get Country Details
              </button>
            </div>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://restcountries.com/v3.1/name/{'<country_name>'}</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The REST Countries API allows you to retrieve information about countries by name, including their capital, population, region, and flags.
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

          {/* Display Country Details */}
          {country && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Country Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <img
                    src={country.flags.png}
                    alt={country.name.common + ' Flag'}
                    className="w-32 h-32 object-cover mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold text-secondary">Flag</p>
                </div>

                <div className="text-left">
                  <p className="text-lg text-gray-700">
                    <strong>Country:</strong> {country.name.common}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Population:</strong> {country.population.toLocaleString()}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Region:</strong> {country.region}
                  </p>
                </div>
              </div>
            </div>
          )}
          {country && (
            <JsonData data={country} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
