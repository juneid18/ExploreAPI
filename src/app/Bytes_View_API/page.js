'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function BytesViewPage() {
  const [byteData, setByteData] = useState(null); // Data fetched from API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for Bytes View API (Replace with the actual API endpoint)
  const apiUrl = 'https://api.bytesview.com/data'; // Example API URL

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl);
      setByteData(response.data); // Assuming the API returns JSON data
    } catch (err) {
      setError('Error fetching data from the Bytes View API');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Bytes View API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch byte-related data from the Bytes View API. Click below to load the data.
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://api.bytesview.com/data</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Bytes View API provides byte-related data, such as byte-sized files, byte conversions, or objects. You can query this API to get data in byte format for processing, analyzing, or viewing.
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Response (Example JSON)</h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "status": "success",
  "data": {
    "size_in_bytes": 1024,
    "file_type": "image/jpeg",
    "filename": "example.jpg",
    "download_url": "https://example.com/download/example.jpg"
  }
}
                `}
              </pre>
            </div>

            {/* Fetch Data Button */}
            <div className="flex justify-center items-center mb-6">
              <button
                onClick={fetchData}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Fetch Data
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

          {/* Display Fetched Data */}
          {byteData && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Fetched Data</h2>
              <p className="text-gray-700">
                <strong>Filename:</strong> {byteData.filename}
              </p>
              <p className="text-gray-700">
                <strong>Size (in bytes):</strong> {byteData.size_in_bytes}
              </p>
              <p className="text-gray-700">
                <strong>File Type:</strong> {byteData.file_type}
              </p>
              <a
                href={byteData.download_url}
                target="_blank"
                className="text-blue-600 hover:underline"
                rel="noopener noreferrer"
              >
                Download File
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
