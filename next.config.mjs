/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPEN_WEATHER_API_KEY:process.env.OPEN_WEATHER_API_KEY,
        NEXT_PUBLIC_SPOONACULAR_API_KEY: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
        NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY:process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY,
        NEXT_PUBLIC_GOOGLE_SEARCH_CX: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CX,
        NEXT_PUBLIC_GIPHY_API_KEY: process.env.NEXT_PUBLIC_GIPHY_API_KEY,
        NEXT_PUBLIC_WEB3_FORM_API_KEY: process.env.NEXT_PUBLIC_WEB3_FORM_API_KEY
    },
    async rewrites() {
        return [
          {
            source: '/api/bored',
            destination: 'https://bored-api.appbrewery.com/random',
          },
        ]
      },
};

export default nextConfig;
