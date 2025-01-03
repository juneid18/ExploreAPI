export default function ViewApi({ apiData }) {
    return (
      <div className="bg-primary text-tertiary min-h-screen py-10 px-4">
        <div className="container mx-auto">
          {/* Header Section */}
          <h1 className="text-3xl font-bold text-secondary mb-6">API Details</h1>
  
          {/* API Details Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* API URL */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-secondary">API URL</h2>
              <p className="text-sm bg-gray-100 p-2 rounded border border-gray-200 mt-2 break-words">
            api URL
              </p>
            </div>
  
            {/* API Description */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-secondary">Description</h2>
              <p className="text-sm text-gray-700 mt-2">description</p>
            </div>
  
            {/* API Content */}
            <div>
              <h2 className="text-xl font-semibold text-secondary">API Content</h2>
              <div className="bg-gray-100 p-4 rounded border border-gray-200 mt-2">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {/* {JSON.stringify(apiData.content, null, 2)} */}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  