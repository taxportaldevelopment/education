import React from "react";

export default function ServiceCard({ title, desc, img, href }) {
  const placeholder = "https://via.placeholder.com/800x400?text=Service+Image";

  const Card = (
    <article className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <div className="h-40 w-full overflow-hidden bg-gray-100">
        <img
          src={img || placeholder}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholder;
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>
        {href ? (
          <a
            href={href}
            className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            aria-label={`Learn more about ${title}`}
          >
            Learn more →
          </a>
        ) : null}
      </div>
    </article>
  );

  return href ? (
    <div className="h-full">{Card}</div>
  ) : (
    <div className="h-full">{Card}</div>
  );
}
