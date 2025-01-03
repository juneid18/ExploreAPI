'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import JsonData from '@/components/JsonData';
import NavBar from '@/components/NavBar';

export default function DeckOfCardsPage() {
  const [deckId, setDeckId] = useState(null); // Deck ID from API
  const [cards, setCards] = useState([]); // Cards drawn from deck
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const baseURL = 'https://deckofcardsapi.com/api/deck'; // Deck of Cards API base URL

  // Function to create a new deck
  const createDeck = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${baseURL}/new/shuffle/`);
      setDeckId(response.data.deck_id);
    } catch (err) {
      setError('Error creating a new deck.');
    } finally {
      setLoading(false);
    }
  };

  // Function to draw cards from the deck
  const drawCards = async () => {
    if (!deckId) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `${baseURL}/${deckId}/draw/?count=5`
      );
      setCards(response.data.cards);
    } catch (err) {
      setError('Error drawing cards.');
    } finally {
      setLoading(false);
    }
  };

  // Function to shuffle the deck again
  const shuffleDeck = async () => {
    if (!deckId) return;
    setLoading(true);
    setError('');
    try {
      await axios.get(`${baseURL}/${deckId}/shuffle/`);
      setCards([]); // Clear the previously drawn cards
    } catch (err) {
      setError('Error shuffling the deck.');
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
          <h1 className="text-4xl font-bold text-secondary mb-4">Deck of Cards API</h1>
          <p className="text-lg text-gray-700 mb-4">
            Create a new deck, shuffle it, and draw cards using the Deck of Cards API.
          </p>

          {/* Button to Create a New Deck */}
          <div className="mb-6">
            <button
              onClick={createDeck}
              className="px-6 py-2 rounded-lg bg-secondary text-white"
            >
              Create New Deck
            </button>
          </div>

          {/* Button to Shuffle the Deck */}
          {deckId && (
            <div className="mb-6">
              <button
                onClick={shuffleDeck}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Shuffle Deck
              </button>
            </div>
          )}

          {/* Button to Draw Cards */}
          {deckId && (
            <div className="mb-6">
              <button
                onClick={drawCards}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Draw 5 Cards
              </button>
            </div>
          )}
        </div>

        {/* Display Error Message */}
        {error && (
          <div className="flex items-center justify-center min-h-screen bg-red-50">
            <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
          </div>
        )}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h1 className="text-4xl font-bold text-secondary mb-4">Deck of Cards An API</h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Description:</strong> This API allows you to create a new deck, shuffle it, and draw cards.
              Below you can interact with the API and see the API URL, description, and response.
          </p>
          <p className="text-lg text-gray-700">
            <strong>API URL:</strong>{" "}
            <a
              href={'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline hover:text-secondary-light"
            >
              https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
            </a>
          </p>
        </div>
        {/* Display Cards */}
        {cards.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-4">Drawn Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div key={card.code} className="text-center">
                  <img
                    src={card.image}
                    alt={card.value + ' of ' + card.suit}
                    className="w-32 h-48 object-cover mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold text-secondary">
                    {card.value} of {card.suit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
          </div>
        )}
        {cards && (
        <JsonData data={cards} />
        )}
      </div>
    </div>  
    <Footer />
    </>
    
  );
}
