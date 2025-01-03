'use client';
import { useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import JsonData from '@/components/JsonData';
import NavBar from '@/components/NavBar';

export default function GitHubApiPage() {
  const [username, setUsername] = useState(''); // GitHub username input
  const [user, setUser] = useState(null); // GitHub user details
  const [repos, setRepos] = useState([]); // List of repositories
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [apiResponse, setApiResponse] = useState(null); // API response

  // Function to fetch GitHub user and repositories
  const fetchGitHubData = async () => {
    if (!username) return;
    setLoading(true);
    setError('');
    setApiResponse(null); // Reset previous API response
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setUser(userResponse.data); // Store user data
      const reposResponse = await axios.get(userResponse.data.repos_url);
      setRepos(reposResponse.data); // Store repositories data
      setApiResponse({ user: userResponse.data, repositories: reposResponse.data });
    } catch (err) {
      setError('Error fetching GitHub user data or repositories.');
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
            <h1 className="text-4xl font-bold text-secondary mb-4">GitHub API</h1>
            <p className="text-lg text-gray-700 mb-4">
              Use the GitHub API to search for users and their public repositories.
              Enter a GitHub username to see their profile and repositories.
            </p>

            {/* Input for GitHub Username */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter GitHub Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            {/* Button to Fetch User Data */}
            <div className="mb-6">
              <button
                onClick={fetchGitHubData}
                className="px-6 py-2 rounded-lg bg-secondary text-white"
              >
                Search GitHub User
              </button>
            </div>
          </div>

          {/* Display Error Message */}
          {error && (
            <div className="flex items-center justify-center min-h-screen bg-red-50">
              <h1 className="text-red-600 text-2xl font-semibold">Error: {error}</h1>
            </div>
          )}

          {/* Display GitHub User Profile */}
          {user && (
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary mb-4">User Profile</h2>
              <div className="flex items-center space-x-6">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div>
                  <p className="text-xl font-semibold text-secondary">{user.name || user.login}</p>
                  <p className="text-lg text-gray-700">{user.bio}</p>
                  <p className="text-lg text-gray-700">Followers: {user.followers} | Following: {user.following}</p>
                  <p className="text-lg text-gray-700">Public Repos: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Visit GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Display Repositories */}
          {repos.length > 0 && (
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary mb-4">Repositories</h2>
              <ul className="space-y-4">
                {repos.map((repo) => (
                  <li key={repo.id} className="text-lg">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {repo.name}
                    </a>
                    <p className="text-sm text-gray-600">{repo.description || 'No description'}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display API Response */}
          {apiResponse && (
              <JsonData data={apiResponse} />
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
              <h1 className="text-secondary text-2xl font-semibold">Loading...</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
