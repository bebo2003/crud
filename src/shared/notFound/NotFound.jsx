const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-500"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
