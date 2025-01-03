'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function SpoonacularPage() {
  const [searchTerm, setSearchTerm] = useState(''); // Ingredient or dish search term
  const [recipes, setRecipes] = useState(null); // API response data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; // Spoonacular API Key

  // Function to handle search and fetch data from the Spoonacular API
  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`
      );
      setRecipes(response.data);
    } catch (err) {
      setError('Error fetching recipes.');
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Spoonacular API</h1>
          <p className="text-lg text-gray-700 mb-4">
            Search for recipes based on ingredients or dish names using the Spoonacular API.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Enter ingredient or dish"
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

        {/* API URL and Description */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-secondary mb-4">API Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>API URL:</strong>{' '}
            <a
              href="https://api.spoonacular.com/recipes/complexSearch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://api.spoonacular.com/recipes/complexSearch
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>API Description:</strong> The Spoonacular API allows you to search for recipes by
            ingredients or dish name. You can filter recipes based on various criteria, such as cuisine,
            diet, and more.
          </p>
        </div>

        {/* API Data Display */}
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

        {recipes && (
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-4">Recipe Results</h2>

            {/* Display Recipes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.results.map((recipe) => (
                <div key={recipe.id} className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-300">
                  <h3 className="text-lg font-semibold text-secondary mb-2">{recipe.title}</h3>
                  <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <p className="text-sm text-gray-700">
                    <strong>Dish Type:</strong> {recipe.dishTypes ? recipe.dishTypes.join(', ') : 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display API Response in JSON */}
        {recipes && (
          <JsonData recipes={recipes}/>
        )}
      </div>
    </div>  
     <Footer />
    </>
    
  );
}
