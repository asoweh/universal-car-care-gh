import { useForm } from 'react-hook-form';
import { CONTACT_INFO } from '../data/constants';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="bg-custom-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-dark mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for any inquiries or appointments
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-custom-gray p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-custom-dark mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-custom-red text-white w-10 h-10 rounded-full flex items-center justify-center">
                        <i className="icon icon-locate"></i>
                      </div>
                      <h3 className="font-bold text-custom-dark">Address</h3>
                    </div>
                    <p className="text-gray-600 ml-13">
                      {CONTACT_INFO.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-custom-red text-white w-10 h-10 rounded-full flex items-center justify-center">
                        <i className="icon icon-phone"></i>
                      </div>
                      <h3 className="font-bold text-custom-dark">Phone</h3>
                    </div>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-gray-600 hover:text-custom-red ml-13 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-custom-red text-white w-10 h-10 rounded-full flex items-center justify-center">
                        <i className="icon icon-email"></i>
                      </div>
                      <h3 className="font-bold text-custom-dark">Email</h3>
                    </div>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-600 hover:text-custom-red ml-13 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-custom-red text-white w-10 h-10 rounded-full flex items-center justify-center">
                        <i className="icon icon-clock"></i>
                      </div>
                      <h3 className="font-bold text-custom-dark">Opening Hours</h3>
                    </div>
                    <div className="text-gray-600 ml-13 space-y-1">
                      <p>{CONTACT_INFO.hours.weekdays}</p>
                      <p>{CONTACT_INFO.hours.saturday}</p>
                      <p className="text-custom-red">{CONTACT_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-custom-dark mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-red"
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-red"
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-red"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-red"
                        placeholder="+233-XX-XXX-XXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-red"
                      placeholder="Service Inquiry"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-red"
                      placeholder="Tell us about your vehicle and service needs..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-custom-red text-white px-8 py-4 rounded hover:bg-red-700 transition-colors duration-300 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-custom-gray">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-96 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              <div className="text-center">
                <i className="icon icon-locate text-4xl mb-2"></i>
                <p>Map Integration Placeholder</p>
                <p className="text-sm">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
