import React from "react";

const JsonData = (recipes) => {
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          API Response (JSON)
        </h2>
        <pre className="bg-gray-100 p-6 rounded-lg text-sm text-gray-800 overflow-auto">
          {JSON.stringify(recipes, null, 2)}
        </pre>
      </div>
    </>
  );
};

export default JsonData;
