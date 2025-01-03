"use client";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar"; // Ensure you have a NavBar component
import Footer from "@/components/Footer"; // Ensure you have a Footer component
import JsonData from "@/components/JsonData";

export default function MemeInfoPage() {
  // State to store meme info
  const [memeInfo, setMemeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch meme data from the Meme API
  const fetchMemeInfo = async () => {
    try {
      const response = await fetch("https://meme-api.com/gimme");
      if (!response.ok) {
        throw new Error("Failed to fetch meme data");
      }
      const data = await response.json();
      console.log("Fetched Meme Data:", data); // Debugging log
      setMemeInfo(data); // Store the fetched data
    } catch (err) {
      setError(err.message); // Handle errors
      console.error("Error fetching meme data:", err); // Debugging log
    } finally {
      setLoading(false); // Set loading state to false after fetching
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-primary text-tertiary py-10">
        <div className="container mx-auto px-6 space-y-10">
          {/* API Info Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Meme Generator API
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Generate memes by choosing a template and adding your own text
              using the Meme Generator API.
            </p>
            {/* Button to Fetch Activity */}
            <div className="mb-6">
              <button
                onClick={fetchMemeInfo}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Get Random Memes
              </button>
            </div>
            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">
                https://meme-api.com/gimme
                </code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">
                API Description
              </h2>
              <p className="text-gray-700">
              The API at <strong>https://meme-api.com</strong> provides a random meme in the form of an image. When you make a request to this endpoint, it returns data about a meme, including a URL to the image, which can be used to display the meme in your application.


              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">
                API Response (Example JSON)
              </h2>
              <pre className="bg-gray-200 p-4 rounded-lg text-sm text-gray-800">
                {`
{
  "text": "197 is a prime number.",
  "number": 197,
  "found": true,
  "type": "trivia"
}
                `}
              </pre>
            </div>
          </div>

          {/* Loading State */}
          {loading && <p className="text-center text-gray-700">No meme...</p>}

          {/* Error State */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Display meme image */}
          {memeInfo && (
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <div className="text-center">
                <img
                  src={memeInfo.url}
                  alt="Meme"
                  className="mx-auto rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          )}
          {memeInfo && <JsonData data={memeInfo} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
