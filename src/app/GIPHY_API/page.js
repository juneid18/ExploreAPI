'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function GiphyPage() {
  const [searchTerm, setSearchTerm] = useState(''); // Search input
  const [gifs, setGifs] = useState([]); // GIFs fetched from API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // Replace with your Giphy API key
  const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY; // Insert your GIPHY API key here

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`
      );
      setGifs(response.data.data);
    } catch (err) {
      setError('Error fetching GIFs');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">GIPHY API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Search and discover GIFs using the GIPHY API. Enter a search term to get the GIFs!
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://api.giphy.com/v1/gifs/search</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Giphy API allows you to search for GIFs using a query parameter (`q`). It provides a JSON response containing GIF data, including images, titles, and metadata.
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "data": [
    {
      "type": "gif",
      "id": "l2JdUzX6ntVtTCyHE",
      "url": "https://giphy.com/gifs/l2JdUzX6ntVtTCyHE",
      "slug": "l2JdUzX6ntVtTCyHE",
      "bitly_gif_url": "https://gph.is/g/4rkLzKx",
      "bitly_url": "https://gph.is/g/4rkLzKx",
      "embed_url": "https://giphy.com/embed/l2JdUzX6ntVtTCyHE",
      "images": {
        "fixed_height": {
          "url": "https://media.giphy.com/media/l2JdUzX6ntVtTCyHE/200.gif",
          "width": "356",
          "height": "200",
          "size": "1518541",
          "mp4": "https://media.giphy.com/media/l2JdUzX6ntVtTCyHE/200.mp4",
          "mp4_size": "71155",
          "webp": "https://media.giphy.com/media/l2JdUzX6ntVtTCyHE/200.webp",
          "webp_size": "46986"
        }
      },
      "title": "happy",
      "rating": "g",
      "user": {
        "avatar_url": "https://media.giphy.com/avatars/default/avatars-512.png",
        "username": "giphy"
      }
    }
  ],
  "pagination": {
    "total_count": 254185,
    "count": 10,
    "offset": 0
  },
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "sample_id"
  }
}
                `}
              </pre>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center items-center mb-6">
              <input
                type="text"
                placeholder="Search for GIFs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300"
              />
              <button
                onClick={handleSearch}
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

          {/* Display Loading State */}
          {loading && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
            </div>
          )}

          {/* Display GIFs */}
          {gifs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gifs.map((gif) => (
                <div key={gif.id} className="text-center">
                  <img
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <p className="mt-2 text-lg font-semibold text-secondary">{gif.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
