import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info to an error reporting service here
    // console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200 p-8">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <p className="mb-4">An unexpected error occurred in the application.</p>
          <pre className="bg-red-100 dark:bg-red-800 p-4 rounded mb-4 max-w-full overflow-x-auto text-xs">
            {this.state.error && this.state.error.toString()}
          </pre>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-health-blue text-white rounded hover:bg-health-green transition"
          >
            Reload App
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 