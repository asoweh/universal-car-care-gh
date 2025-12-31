import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-gray">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-custom-red mb-4">404</h1>
        <h2 className="text-4xl font-bold text-custom-dark mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="bg-custom-red text-white px-8 py-4 rounded hover:bg-red-700 transition-colors duration-300 font-semibold"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border-2 border-custom-red text-custom-red px-8 py-4 rounded hover:bg-custom-red hover:text-white transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
