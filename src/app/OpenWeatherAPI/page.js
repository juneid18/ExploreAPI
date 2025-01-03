'use client'
import { useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function OpenWeatherPage() {
  const [city, setCity] = useState(""); // City name input
  const [weatherData, setWeatherData] = useState(null); // Weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // OpenWeather API Key
  const apiKey = process.env.OPEN_WEATHER_API_KEY ;

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {/* Navigation Section */}
    <NavBar />
      <div className="min-h-screen bg-primary text-tertiary py-10">
      <div className="container mx-auto px-6 space-y-10">
        {/* API Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">OpenWeather API</h1>
          <p className="text-lg text-gray-700 mb-4">
            Enter a city name to get the current weather information.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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

        {/* Weather Data Section */}
        {loading && (
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center min-h-screen bg-red-50">
            <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
          </div>
        )}

        {weatherData && (
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="text-lg text-gray-700">
              <strong>Temperature:</strong> {weatherData.main.temp}°C
            </p>
            <p className="text-lg text-gray-700">
              <strong>Weather:</strong> {weatherData.weather[0].description}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Humidity:</strong> {weatherData.main.humidity}%
            </p>
            <p className="text-lg text-gray-700">
              <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
            </p>
          </div>
        )}

        {/* API URL, Description, and Response JSON Section */}
        {weatherData && (
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 mt-10">
            <h3 className="text-2xl font-bold text-secondary mb-4">API Information</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>API URL:</strong>{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">{`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY&units=metric`}</code>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>API Description:</strong> This API retrieves the current weather data for the specified city.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>API Response (JSON):</strong>
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg text-gray-800">
              {JSON.stringify(weatherData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>  

    {/* Footer Section */}
    <Footer />
    </>
    
  );
}
