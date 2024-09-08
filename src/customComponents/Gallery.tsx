//import React, { useState } from 'react';
//
//// Define the type for images
//interface Image {
//  id: number;
//  src: string;
//  alt: string;
//}
//
//interface GalleryGridProps {
//  images: Image[];
//}
//
//const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
//  const [showMore, setShowMore] = useState(false);
//
//  // Show only the first 4 images (2 rows) initially
//  const initialCount = 4;
//  const displayedImages = showMore ? images : images.slice(0, initialCount);
//
//  return (
//    <div className="max-w-4xl mx-auto">
//      <div className="grid grid-cols-2 gap-4">
//        {displayedImages.map((image) => (
//          <img
//            key={image.id}
//            src={image.src}
//            alt={image.alt}
//            className={` object-cover rounded-lg ${image.id & 1 ? 'h-[40vw]' : 'h-[70vw]' } `}
//          />
//        ))}
//      </div>
//      {images.length > initialCount && (
//        <div className="text-center mt-4">
//          <button
//            onClick={() => setShowMore(!showMore)}
//            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//          >
//            {showMore ? 'View Less' : 'View More'}
//          </button>
//        </div>
//      )}
//    </div>
//  );
//};
//
//export default GalleryGrid;
//
import React, { useState } from "react";

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const events = [
    { title: 'Image 1', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
    { title: 'Image 2', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
    { title: 'Image 3', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' },
    { title: 'Image 4', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
    { title: 'Image 5', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
    { title: 'Image 6', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' },
    { title: 'Image 7', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
    { title: 'Image 8', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
    { title: 'Image 9', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' },
    { title: 'Image 10', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
    { title: 'Image 11', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg' },
    { title: 'Image 12', url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' },
  ];
  // Show initial 2 rows (4 items) or all items if expanded
  const itemsToShow = isExpanded ? events : events.slice(0, 4);

  // Determine if more items are left to show
  const hasMoreToShow = events.length > itemsToShow.length;

  return (
    <main className="bg-white w-full rounded-xl mt-4 mb-12 p-4">
      <h1 className="text-xl font-semibold mb-4">Gallery</h1>
      {/* Grid layout for images */}
      <div className="grid grid-cols-1 gap-4">
        {itemsToShow.reduce((acc, event, index) => {
          if (index % 2 === 0) {
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            acc.push(
              <div key={index} className="flex gap-4 h-48">
                <div className={`overflow-hidden rounded-xl ${isEvenRow ? 'w-2/3' : 'w-1/3'}`}>
                  <img
                    src={event.url}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {itemsToShow[index + 1] && (
                  <div className={`overflow-hidden rounded-xl ${isEvenRow ? 'w-1/3' : 'w-2/3'}`}>
                    <img
                      src={itemsToShow[index + 1].url}
                      alt={itemsToShow[index + 1].title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
            );
          }
          return acc;
        }, [])}
      </div>
      {/* Show the button only if there are more items to display */}
      <div className="flex justify-center mt-4">
        {hasMoreToShow && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-blue-500 text-sm font-medium"
          >
            View More
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-blue-500 text-sm font-medium ml-4"
          >
            View Less
          </button>
        )}
      </div>
    </main>
  );
};

export default Gallery;
