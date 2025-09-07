"use client";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console or external service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <div className="text-6xl mb-4">💔</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                🔄 Refresh Page
              </button>
              
              <button
                onClick={() => window.location.href = "/"}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                🏠 Go to Homepage
              </button>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-red-600 font-semibold">
                  Error Details (Development Only)
                </summary>
                <div className="mt-2 p-4 bg-red-50 rounded-lg text-sm">
                  <p className="font-semibold text-red-800">Error:</p>
                  <p className="text-red-700 mb-2">{this.state.error.toString()}</p>
                  <p className="font-semibold text-red-800">Stack Trace:</p>
                  <pre className="text-red-600 text-xs overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
