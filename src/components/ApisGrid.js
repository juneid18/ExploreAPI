'use client'
import Link from "next/link";

export default function ApisGrid({ searchQuery }) {
  const apis = [
    { id: 1, name: "{JSON} Placeholder", icon: "👤", path: "/jsonplaceholder" },
    { id: 2, name: "OpenWeather API", icon: "☁️", path: "/OpenWeatherAPI" },
    { id: 3, name: "Spoonacular API", icon: "🍴", path: "/spoonacular" },
    { id: 4, name: "Desk Of Card", icon: "♣️", path: "/deckofcardsapi" },
    { id: 5, name: "GitHub API", icon: "👥", path: "/GitHub_API" },
    { id: 6, name: "Google Search API", icon: "🔍", path: "/Google_Search_API" },
    { id: 7, name: "Giphy API", icon: "🧧", path: "/GIPHY_API" },
    { id: 8, name: "Trivia API", icon: "📚", path: "/Trivia_API" },
    { id: 9, name: "Bytes View API", icon: "🔢", path: "/Bytes_View_API" },
    { id: 10, name: "The Cat API", icon: "🐱", path: "/The_Cat_API" },
    { id: 11, name: "News API", icon: "📰", path: "/News_API" },
    { id: 12, name: "PokeAPI ", icon: "🔴", path: "/PokeAPI" },
    { id: 13, name: "Joke API ", icon: "🃏", path: "/Joke_API" },
    { id: 14, name: "REST Countries API ", icon: "🌐", path: "/REST_Countries_API" },
    { id: 15, name: "Dog Image API ", icon: "🐶", path: "/Dog_Image_API" },
    { id: 16, name: "Ipify API ", icon: "〽️", path: "/Ipify_API" },
    { id: 17, name: "Genderize API ", icon: "🧑‍🤝‍🧑", path: "/Genderize_API" },
    { id: 18, name: "Number API", icon: "🔢", path: "/Number_API" },
    { id: 19, name: "Bored API", icon: "🥱", path: "/Bored_API" },
    { id: 20, name: "Meme Generator API", icon: "😜", path: "/Meme_Generator" },
  ];

  // Filter APIs based on the search query
  const filteredApis = apis.filter((api) =>
    api.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
          Browse Available APIs
        </h2>

        {/* APIs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApis.length > 0 ? (
            filteredApis.map((api) => (
              <Link
                key={api.id}
                href={`${api.path}`}
                className="bg-white border border-tertiary rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="text-4xl text-secondary mb-4">{api.icon}</div>
                {/* Title */}
                <h3 className="text-lg font-medium text-tertiary">{api.name}</h3>
              </Link>
            ))
          ) : (
            <p className="text-lg text-tertiary">No APIs found for your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
