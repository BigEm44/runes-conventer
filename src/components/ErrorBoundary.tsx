interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="w-200 h-100 flex flex-col justify-center items-center border border-red-500 bg-red-50">
      <h2 className="text-lg font-bold">Something went wrong:</h2>
      <pre className="text-sm">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 p-2 bg-red-600 text-white rounded"
      >
        Try to refresh the app
      </button>
    </div>
  );
}
