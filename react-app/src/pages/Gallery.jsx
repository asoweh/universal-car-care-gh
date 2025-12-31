import { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - you can add more as needed
  const galleryImages = [
    { id: 1, src: '/uploads/sites/11/2020/04/gallery-1.jpg', alt: 'Car Service 1' },
    { id: 2, src: '/uploads/sites/11/2020/04/gallery-2.jpg', alt: 'Car Service 2' },
    { id: 3, src: '/uploads/sites/11/2020/04/gallery-3.jpg', alt: 'Car Service 3' },
    { id: 4, src: '/uploads/sites/11/2020/04/gallery-4.jpg', alt: 'Car Service 4' },
    { id: 5, src: '/uploads/sites/11/2020/04/gallery-5.jpg', alt: 'Car Service 5' },
    { id: 6, src: '/uploads/sites/11/2020/04/gallery-6.jpg', alt: 'Car Service 6' },
    { id: 7, src: '/uploads/sites/11/2020/04/gallery-7.jpg', alt: 'Car Service 7' },
    { id: 8, src: '/uploads/sites/11/2020/04/gallery-8.jpg', alt: 'Car Service 8' },
    { id: 9, src: '/uploads/sites/11/2020/04/gallery-9.jpg', alt: 'Car Service 9' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="bg-custom-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-dark mb-4">Gallery</h1>
          <p className="text-lg text-gray-600">
            View our work and facility
          </p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 justify-center">
            <Link 
              to="/gallery" 
              className="px-6 py-2 bg-custom-red text-white rounded hover:bg-red-700 transition-colors"
            >
              All Work
            </Link>
            <Link 
              to="/gallery-completed" 
              className="px-6 py-2 border-2 border-custom-red text-custom-red rounded hover:bg-custom-red hover:text-white transition-colors"
            >
              Completed Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-custom-red transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          <div className="max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-custom-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl mb-8">
            Experience the quality service shown in our gallery
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-custom-red px-8 py-4 rounded hover:bg-gray-100 transition-colors duration-300 font-semibold"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
