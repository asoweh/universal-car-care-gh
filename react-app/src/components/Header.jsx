import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CONTACT_INFO } from '../data/constants';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-lg' : 'bg-white'}`}>
      {/* Mobile Info Section */}
      <div className={`lg:hidden bg-custom-dark text-white transition-all duration-300 overflow-hidden ${showMobileInfo ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-4 space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <i className="icon icon-locate"></i>
            {CONTACT_INFO.address}
          </p>
          <p className="flex items-center gap-2">
            <i className="icon icon-phone"></i>
            {CONTACT_INFO.phone}
          </p>
          <p className="flex items-center gap-2">
            <i className="icon icon-email"></i>
            {CONTACT_INFO.email}
          </p>
          <p className="flex items-center gap-2">
            <i className="icon icon-clock"></i>
            {CONTACT_INFO.hours.weekdays} & {CONTACT_INFO.hours.saturday}
          </p>
        </div>
      </div>

      {/* Top Bar */}
      <div className="hidden lg:block bg-custom-dark text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="icon icon-clock"></i>
              <span>Mon-Fri <span className="text-custom-red">8:00AM - 5:00PM &</span> Sat - 9:00AM - 3:00PM</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="icon icon-phone"></i>
              <span className="hidden md:inline">Contact Us</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-custom-red hover:text-white transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="icon icon-locate"></i>
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/uploads/sites/11/2020/05/logo.png" 
                alt="Universal Car Care Logo" 
                className="h-12 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-custom-dark hover:text-custom-red transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Link 
                to="/contact" 
                className="hidden md:flex items-center gap-2 bg-custom-red text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-300"
              >
                <i className="icon-shape icon"></i>
                <span>Contact Us</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-custom-dark p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Mobile Info Toggle */}
              <button
                onClick={() => setShowMobileInfo(!showMobileInfo)}
                className="lg:hidden text-custom-dark p-2"
                aria-label="Toggle info"
              >
                <svg className={`w-5 h-5 transition-transform ${showMobileInfo ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-custom-dark"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="mt-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMobileMenu}
                className="text-custom-dark hover:text-custom-red transition-colors duration-300 font-medium py-2 border-b border-gray-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
