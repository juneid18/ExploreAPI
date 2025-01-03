'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import JsonData from '@/components/JsonData';
import NavBar from '@/components/NavBar';

export default function GoogleSearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState(''); // Search query from input

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY; // Replace with your actual API key
  const cx = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CX; // Replace with your Custom Search Engine ID
  const baseURL = 'https://www.googleapis.com/customsearch/v1'; // Google Custom Search API URL

  // Function to handle search requests
  const searchGoogle = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(baseURL, {
        params: {
          key: apiKey,
          cx: cx,
          q: query,
        },
      });
      setSearchResults(response.data.items || []);
    } catch (err) {
      setError('Error fetching search results.');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Google Custom Search API</h1>
            <p className="text-lg text-gray-700 mb-4">
              The Google Custom Search API allows you to fetch Google search results programmatically. You can
              create custom search engines and get results based on your queries.
            </p>
            <p className="text-md text-gray-600">
              API URL: <strong>https://www.googleapis.com/customsearch/v1</strong>
            </p>
            <p className="text-md text-gray-600">
              API Documentation: <a href="https://developers.google.com/custom-search/v1/overview" target="_blank" className="text-blue-500">View Documentation</a>
            </p>

            {/* Search Input */}
            <div className="mt-6">
              <input
                type="text"
                className="px-4 py-2 rounded-lg border border-gray-300"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={searchGoogle}
                className="ml-4 px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Search
              </button>
            </div>
          </div>

          {/* Display Error Message */}
          {error && (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
              <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
            </div>
          )}

          {/* Display Search Results */}
          {loading && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary mb-4">Search Results</h2>
              <div>
                {searchResults.map((result, index) => (
                  <div key={index} className="mb-6">
                    <a href={result.link} target="_blank" className="text-xl font-semibold text-blue-500">
                      {result.title}
                    </a>
                    <p className="text-gray-700 mt-2">{result.snippet}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Display API Response */}
            <JsonData data={searchResults} />
        </div>
      </div>
      <Footer />
    </>
  );
}
