'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function NewsAPIPage() {
  const [articles, setArticles] = useState([]); // Store fetched articles
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for NewsAPI
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  const apiKey = '6cf4532a98f94a9695968781eab54a16'; // Replace with your NewsAPI key

  // Fetch the latest news articles
  const fetchNews = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl, {
        params: {
          country: 'us', // You can change the country code (e.g., 'us', 'in')
          apiKey: apiKey,
        },
      });
      setArticles(response.data.articles);
    } catch (err) {
      setError('Error fetching news.');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">News API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch the latest news articles using the News API. Click below to get the latest headlines.
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://newsapi.org/v2/top-headlines</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The NewsAPI provides top news headlines from multiple sources, allowing you to filter them by country and other parameters.
              </p>


            </div>
            <div className='text-left'>
                {articles&& (
    <JsonData data={articles} />
)}
            </div>

            {/* Fetch Data Button */}
            <div className="flex justify-center items-center mb-6">
              <button
                onClick={fetchNews}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Fetch Latest News
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

          {/* Display News Articles */}
          {articles.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Latest News</h2>
              <div className="space-y-6">
                {articles.map((article) => (
                  <div key={article.url} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-primary">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Read more
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
