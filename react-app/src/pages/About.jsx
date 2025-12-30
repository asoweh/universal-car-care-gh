import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="bg-custom-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-dark mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about Universal Car Care Ghana
          </p>
        </div>
      </section>

      {/* Company Reputation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-6">
                Our Company Reputation
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Universal Car Care Ghana has been serving the automotive needs of our community for over 35 years. 
                We have built our reputation on providing quality service, honest advice, and competitive pricing.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of certified technicians is dedicated to keeping your vehicle running smoothly and safely. 
                We use the latest diagnostic equipment and follow manufacturer specifications to ensure your vehicle 
                receives the best care possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need routine maintenance or major repairs, you can trust Universal Car Care Ghana 
                to provide professional service with a personal touch.
              </p>
            </div>
            <div>
              <img 
                src="/uploads/sites/11/2020/04/about-image.jpg" 
                alt="About Universal Car Care" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-custom-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-custom-red text-4xl mb-4">
                <i className="icon-target"></i>
              </div>
              <h3 className="text-2xl font-bold text-custom-dark mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional automotive services that exceed customer expectations through 
                quality workmanship, honest communication, and competitive pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-custom-red text-4xl mb-4">
                <i className="icon-eye"></i>
              </div>
              <h3 className="text-2xl font-bold text-custom-dark mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred automotive service provider in Ghana, 
                known for our commitment to excellence and customer satisfaction.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-custom-red text-4xl mb-4">
                <i className="icon-star"></i>
              </div>
              <h3 className="text-2xl font-bold text-custom-dark mb-4">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Integrity in all we do</li>
                <li>• Quality workmanship</li>
                <li>• Customer satisfaction</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Advantages of Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Why choose Universal Car Care Ghana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-custom-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i className="icon-check"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
              <p className="text-gray-600">
                All our technicians are certified and experienced
              </p>
            </div>

            <div className="text-center">
              <div className="bg-custom-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i className="icon-tools"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
              <p className="text-gray-600">
                Latest diagnostic and repair equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-custom-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i className="icon-warranty"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
              <p className="text-gray-600">
                We use only high-quality OEM and aftermarket parts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-custom-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i className="icon-support"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Dedicated support team ready to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-custom-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8">
            Visit us today and discover why we're Ghana's trusted auto care provider
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-custom-red px-8 py-4 rounded hover:bg-gray-100 transition-colors duration-300 font-semibold"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
