import { Flag } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex">
      {/* Left Section - Black */}
      <div className="w-1/2 bg-black p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-8">
            <Flag className="w-6 h-6 mr-2 text-white" />
            <span className="text-white">ENGINEERED IN USA</span>
          </div>
        </div>

        {/* Centered QR Code */}
        <div className="flex justify-center items-center flex-grow">
          <img
            src="src/assets/qr-image.png"
            alt="QR Code"
            className="w-[4.5rem] h-[4.5rem] mt-44"
          />
        </div>

        <div className="mt-24 flex flex-col justify-center items-center flex-grow">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="src/assets/son.png"
              alt="Flamingo Logo"
              className="w-[4.5rem] h-[4.5rem]"
            />
            <img
              src="src/assets/favicon.png"
              alt="Flamingo Logo"
              className="w-[4.5rem] h-[4.5rem]"
            />
          </div>

          <div className="text-pink-500 text-4xl font-bold mb-2">Flamingo</div>
          <div className="text-gray-400 text-sm mb-8">NOTHING BUT THE BEST</div>

          <div className="text-2xl font-bold text-white mb-4">
            FLAMINGO CAR CARE TECH CO., LIMITED
          </div>

          <div className="space-y-2 text-gray-400 text-sm">
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              ADD: Flamingo Cartech, Ymi 1939 Building, Festac Access Road,
              Amuwo Odofin, Lagos.
            </div>
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              TEL: +234 814 036 4558
            </div>
            <div className="flex items-center">
              <span className="mr-2">📱</span>
              WHATSAPP: +234 814 036 4558
            </div>
            <div className="flex items-center">
              <span className="mr-2">🌐</span>
              www.flamingocartech.com
            </div>
            <div className="flex items-center">
              <span className="mr-2">✉️</span>
              Sales@flamingocartech.com
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Gradient */}
      <div className="w-1/2 relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-pink-600 to-pink-500"></div>

        {/* Logo at the Top */}
        <div className="absolute top-12 right-12 z-20">
          <img
            src="src/assets/favicon.png"
            alt="Flamingo Logo"
            className="w-28 h-28"
          />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center top-0 mb-32">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold tracking-wider mb-4">
              CAR CARE
            </h1>
            <div className="text-white text-dark-emphasis text-3xl mb-2">
              <p>PRODUCT</p>
              <p>MANUAL</p>
            </div>
            <div className="text-white text-4xl font-bold">2024-2025</div>
          </div>
        </div>

        {/* Car Image at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden z-0 mt-14">
          <img
            src="src/assets/car.png"
            alt="Luxury Car"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
