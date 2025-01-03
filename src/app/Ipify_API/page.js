'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function IpifyAPIPage() {
  const [ipAddress, setIpAddress] = useState(null); // Store the IP address
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for Ipify API
  const apiUrl = 'https://api.ipify.org?format=json';

  // Function to fetch the public IP address
  const fetchIpAddress = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(apiUrl);
      setIpAddress(response.data.ip); // Store the IP address
    } catch (err) {
      setError('Error fetching IP address. Please try again.');
      setIpAddress(null);
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
            <h1 className="text-4xl font-bold text-secondary mb-4">Ipify API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch your public IP address using the Ipify API. Click the button below to get your IP address!
            </p>

            {/* Button to Fetch IP Address */}
            <div className="mb-6">
              <button
                onClick={fetchIpAddress}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get My Public IP Address
              </button>
            </div>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://api.ipify.org?format=json</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The Ipify API provides a simple and reliable way to fetch your public IP address in JSON format. The endpoint returns your public IP address.
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

          {/* Display IP Address */}
          {ipAddress && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Your Public IP Address</h2>
              <p className="text-lg font-semibold text-secondary">{ipAddress}</p>
            </div>
          )}
          {ipAddress && (
            <JsonData data={ipAddress} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
