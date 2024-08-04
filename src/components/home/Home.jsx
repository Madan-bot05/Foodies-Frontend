import React from 'react';

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/public/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white">
        Home
      </div>
    </div>
  );
}

export default Home;
