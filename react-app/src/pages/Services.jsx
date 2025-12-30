import { Link } from 'react-router-dom';
import { SERVICES, DETAILED_SERVICES } from '../data/services';

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="bg-custom-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-dark mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            Comprehensive auto repair and maintenance services
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-custom-gray flex items-center justify-center">
                  <div className="text-custom-red text-6xl">
                    <i className={service.icon}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-custom-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-custom-red mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-block text-custom-red hover:text-red-700 font-semibold"
                  >
                    Schedule Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-16 bg-custom-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Complete Service List
            </h2>
            <p className="text-gray-600 text-lg">
              All the services we offer to keep your vehicle in top condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {DETAILED_SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-custom-red text-xl mr-3">✓</span>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Why Choose Universal Car Care?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-custom-red text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="icon-check"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">
                  Our certified technicians have years of experience working on all makes and models.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-custom-red text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="icon-tools"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-600">
                  We use the latest diagnostic and repair equipment to ensure quality service.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-custom-red text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="icon-warranty"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                <p className="text-gray-600">
                  We use only high-quality OEM and aftermarket parts for all repairs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-custom-red text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="icon-price"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Fair and transparent pricing with no hidden fees or charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-custom-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Service for Your Vehicle?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to schedule your appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-custom-red px-8 py-4 rounded hover:bg-gray-100 transition-colors duration-300 font-semibold"
            >
              Contact Us
            </Link>
            <a
              href="tel:+233-24-111-4111"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-custom-red transition-all duration-300 font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
