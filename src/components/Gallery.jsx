import React from "react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",

  ];

  return (
    <section id="gallery" className="gallery">
      <h2>My Gallery</h2>
      <p>Here are some of my best memories and project snapshots.</p>

      <div className="grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`gallery ${i}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;