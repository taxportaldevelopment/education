import React from "react";

const galleryCategories = [
  {
    title: "Student Life",
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img1",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img2",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img3",
    ],
  },
  {
    title: "Campus & Buildings",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img4",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img5",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img6",
    ],
  },
  {
    title: "Research & Learning",
    images: [
      "https://images.unsplash.com/photo-1452601092582-6ca3e5e75e68?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img7",
      "https://images.unsplash.com/photo-1434030216411-0b793313e4de?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img8",
      "https://images.unsplash.com/photo-1516321318423-f06f70674e90?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=img9",
    ],
  },
];

export default function Gallery() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-3">Gallery</h2>
        <p className="text-gray-600 text-lg">
          Explore the student experience at universities around the world. From
          iconic campuses to vibrant student communities.
        </p>
      </div>

      {galleryCategories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.images.map((src, i) => (
              <figure
                key={i}
                className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={src}
                  alt={`${category.title}-${i}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
