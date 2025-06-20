const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        <div className="loading-spinner w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
