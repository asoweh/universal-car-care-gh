import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: 'Offer Fast Reliable Service',
      subtitle: 'Over 35 Years Of Quality Auto Service',
      image: '/uploads/sites/11/2020/04/slide-1.jpg',
      cta: 'Schedule Service'
    },
    {
      id: 2,
      title: 'Expert Auto Repair',
      subtitle: 'Your Trusted Car Care Partner',
      image: '/uploads/sites/11/2020/04/slide-2.jpg',
      cta: 'Learn More'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-[500px] md:h-[600px] lg:h-[700px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="text-white max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                    <Link
                      to="/contact"
                      className="inline-block bg-custom-red text-white px-8 py-4 rounded hover:bg-red-700 transition-colors duration-300 text-lg font-semibold"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Welcome to Universal Car Care Ghana
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive auto repair and maintenance services to keep your vehicle running smoothly. 
              With over 35 years of experience, our certified technicians are committed to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-custom-gray rounded-lg">
              <div className="text-custom-red text-5xl mb-4">
                <i className="icon-wrench"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Certified professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6 bg-custom-gray rounded-lg">
              <div className="text-custom-red text-5xl mb-4">
                <i className="icon-tools"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p className="text-gray-600">
                Using the latest diagnostic equipment and tools
              </p>
            </div>
            <div className="text-center p-6 bg-custom-gray rounded-lg">
              <div className="text-custom-red text-5xl mb-4">
                <i className="icon-car"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">All Makes & Models</h3>
              <p className="text-gray-600">
                We service all vehicle makes and models
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-custom-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
              Our Featured Services
            </h2>
            <p className="text-gray-600 text-lg">
              We offer full service auto repair & maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Diagnostics', icon: 'icon-wrench' },
              { title: 'Engine Repair', icon: 'icon-engine' },
              { title: 'Oil / Lube / Filters', icon: 'icon-oil' },
              { title: 'Tires', icon: 'icon-tire' },
              { title: 'Transmission', icon: 'icon-transmission' },
              { title: 'Batteries', icon: 'icon-battery' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-custom-red text-5xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  Professional {service.title.toLowerCase()} services for your vehicle
                </p>
                <Link to="/services" className="text-custom-red hover:text-red-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-custom-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Service Your Vehicle?
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

export default Home;
