import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1010px)" });

  return (
    isDesktop ? (
        <section
        className={`relative h-50 md:h-82 lg:h-screen flex items-center mb-7 m-4 rounded-md overflow-hidden transition-colors duration-700 
        ${!isLoaded ? "bg-gradient-to-b from-blue-900 to-black" : ""}`}
      >
        <img
          src="https://th.bing.com/th/id/OIP.bbBnAVdPK-dM6hin7CQL5gHaD-?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
          alt="Hero Background"
          className={`absolute inset-0 w-full h-[650px] object-cover rounded-md transition-all duration-1000 ease-in-out 
            ${isLoaded ? "blur-0 opacity-100" : "blur-md opacity-50"}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative z-10 text-left px-6 text-black max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Your Health, Our Priority. Shop with Confidence.
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Discover a wide range of essential medicines, wellness products, and healthcare solutions at your fingertips.
          </p>
          <a
            href="#"
            className="text-white inline-block bg-indigo-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
      
      
    ) : (
        <section
        className={`relative m-4 rounded-md overflow-hidden transition-colors duration-700 
        ${!isLoaded ? "bg-gradient-to-b from-blue-900 to-black" : ""}`}
      >
        <img
          src="https://th.bing.com/th/id/OIP.bbBnAVdPK-dM6hin7CQL5gHaD-?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
          alt="Hero Background Mobile"
          className={`w-full h-64 object-cover rounded-md transition-all duration-1000 ease-in-out
            ${isLoaded ? "blur-0 opacity-100" : "blur-md opacity-50"}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/50 rounded-md"></div>
        <div className="relative z-10 text-center px-4 py-6 text-black">
          <h1 className="text-2xl font-bold mb-2">
            Shop Health Products Easily
          </h1>
          <p className="text-sm text-gray-700 mb-4">
            Medicines, wellness & more — all in one place!
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
      
      
    )
  );
};

export default HeroSection;
