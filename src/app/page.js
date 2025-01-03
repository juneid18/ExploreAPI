'use client'
import ApisGrid from "@/components/ApisGrid";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value); // Update the search query when user types
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submit
    setSearchQuery(searchInput); // Update the search query with the input value
  };
  return (
    <>
    {/* Navbar component */}
      <NavBar />

      {/* Hero Section */}
      <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Explore APIs Effortlessly
        </h1>

        {/* Subheading */}
        <p className="text-tertiary text-lg md:text-xl mb-8">
          Discover over 50 APIs at your fingertips. Search and integrate seamlessly into your projects.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center">
          <form className="w-full max-w-lg" onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search APIs..."
                className="w-full border border-tertiary rounded-lg px-4 py-3 text-sm text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary"
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-tertiary focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

      {/* API's Grid Section */}
      <ApisGrid searchQuery={searchQuery}/>

      {/* Footer Section */}
      <Footer />
    </>
  );
}