'use client'
import Footer from "@/components/Footer";
import JsonData from "@/components/JsonData";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";

export default function JsonPlaceholderUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    // Fetch JSONPlaceholder Users Data
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setUsers(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
      </div>
    );
  }

  return (
    <>
    {/* Navigation Section */}
    <NavBar />

      <div className="min-h-screen bg-primary text-tertiary py-10">
      <div className="container mx-auto px-6 space-y-10">
        {/* API Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h1 className="text-4xl font-bold text-secondary mb-4">JSONPlaceholder Users API</h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Description:</strong> This API provides placeholder data for users, including names, emails, addresses, and company details. Use this data to simulate user-related functionality.
          </p>
          <p className="text-lg text-gray-700">
            <strong>API URL:</strong>{" "}
            <a
              href={apiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline hover:text-secondary-light"
            >
              {apiUrl}
            </a>
          </p>
        </div>

        {/* Users Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div >
                <h2 className="text-2xl font-semibold text-secondary mb-2">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Address:</strong> {user.address.street}, {user.address.city}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* JSON Data Viewer */}
        <JsonData data={users} />
      </div>
    </div>  

    {/* Footer Section */}
    <Footer />
    </>
    
  );
}
