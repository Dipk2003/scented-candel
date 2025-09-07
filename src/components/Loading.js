export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="relative">
          {/* Candle animation */}
          <div className="w-16 h-16 mx-auto mb-4">
            <div className="animate-pulse">
              <div className="w-4 h-12 bg-yellow-400 rounded-full mx-auto relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-orange-400 rounded-full animate-bounce"></div>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-lg mt-1 mx-auto"></div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 font-medium">{message}</p>
        
        {/* Dots animation */}
        <div className="flex justify-center space-x-1 mt-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
