'use client'
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import JsonData from '@/components/JsonData';

export default function PokeAPIPage() {
  const [pokemon, setPokemon] = useState(null); // Store fetched Pokémon data
  const [pokemonName, setPokemonName] = useState(''); // Store the input Pokémon name
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // API URL for PokeAPI
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Fetch Pokémon data
  const fetchPokemon = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${apiUrl}${pokemonName.toLowerCase()}`);
      setPokemon(response.data);
    } catch (err) {
      setError('Error fetching Pokémon data. Please try again.');
      setPokemon(null);
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
            <h1 className="text-4xl font-bold text-secondary mb-4">PokeAPI</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fetch Pokémon data using the PokeAPI. Enter the name of any Pokémon to get its details.
            </p>

            {/* API URL and Description */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left mb-8">
              <h2 className="text-2xl font-semibold text-secondary">API URL</h2>
              <p className="text-gray-700">
                <code className="text-sm bg-gray-200 px-2 py-1 rounded">https://pokeapi.co/api/v2/pokemon/{pokemonName}</code>
              </p>

              <h2 className="text-2xl font-semibold text-secondary mt-4">API Description</h2>
              <p className="text-gray-700">
                The PokeAPI provides detailed data on Pokémon, including information about stats, abilities, moves, and more. You can query any Pokémon by name or ID.
              </p>
            </div>

            {/* Input and Fetch Data Button */}
            <div className="mb-6">
              <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                placeholder="Enter Pokémon name"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              />
              <button
                onClick={fetchPokemon}
                className="ml-4 px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Fetch Pokémon Data
              </button>
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

          {/* Display Pokémon Details */}
          {pokemon && (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Pokémon Details</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Name: {pokemon.name}</h3>
                    <p className="text-sm text-gray-600">ID: {pokemon.id}</p>
                    <p className="text-sm text-gray-600">Height: {pokemon.height / 10} m</p>
                    <p className="text-sm text-gray-600">Weight: {pokemon.weight / 10} kg</p>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">Types:</h4>
                      <ul className="list-disc pl-5">
                        {pokemon.types.map((type) => (
                          <li key={type.type.name} className="text-gray-700">{type.type.name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold">Abilities:</h4>
                      <ul className="list-disc pl-5">
                        {pokemon.abilities.map((ability) => (
                          <li key={ability.ability.name} className="text-gray-700">{ability.ability.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {pokemon && (
                <JsonData data={pokemon} />
            )}
        </div>
      </div>
      <Footer />
    </>
  );
}
