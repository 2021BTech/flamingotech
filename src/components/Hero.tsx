import { FaWhatsapp } from 'react-icons/fa';
import home from '../assets/img/home.jpg';
import about from '../assets/img/about.jpg';
import product1 from '../assets/img/1.jpg';
import product2 from '../assets/img/2.jpg';
import product3 from '../assets/img/3.jpg';
import product4 from '../assets/img/4.jpg';
import product5 from '../assets/img/5.jpg';
import product6 from '../assets/img/6.jpg';
import product7 from '../assets/img/7.jpg';
import product8 from '../assets/img/8.jpg';
import product9 from '../assets/img/9.jpg';
import product10 from '../assets/img/10.jpg';
import product11 from '../assets/img/11.jpg';
import product12 from '../assets/img/12.jpg';
import product13 from '../assets/img/13.jpg';
import product14 from '../assets/img/14.jpg';
import product15 from '../assets/img/15.jpg';
import product16 from '../assets/img/16.jpg';
import product17 from '../assets/img/17.jpg';
import product18 from '../assets/img/18.jpg';
import product19 from '../assets/img/19.jpg';
import product20 from '../assets/img/20.jpg';
import product21 from '../assets/img/21.jpg';
import product22 from '../assets/img/22.jpg';
import product23 from '../assets/img/23.jpg';
import product24 from '../assets/img/24.jpg';
import product25 from '../assets/img/25.jpg';
import product26 from '../assets/img/26.jpg';
import product27 from '../assets/img/27.jpg';
import product28 from '../assets/img/28.jpg';
import product29 from '../assets/img/29.jpg';
import product30 from '../assets/img/30.jpg';
import product31 from '../assets/img/31.jpg';
import product32 from '../assets/img/32.jpg';
import product33 from '../assets/img/33.jpg';
import product34 from '../assets/img/34.jpg';
import product35 from '../assets/img/35.jpg';
import product36 from '../assets/img/36.jpg';
import product37 from '../assets/img/37.jpg';
import product38 from '../assets/img/38.jpg';

const Hero = () => {
  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = '+2348140364558';
    const message = 'Hello, I have a question!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 p-4">
        {/* Home image */}
        <div className="relative">
          <img src={home} className="w-full h-auto object-cover" alt="home" />
        </div>

        {/* Other images */}
        <img src={about} className="w-full h-auto object-cover" alt="about" />
        <img src={product1} className="w-full h-auto object-cover" alt="Product 1" />
        <img src={product2} className="w-full h-auto object-cover" alt="Product 2" />
        <img src={product3} className="w-full h-auto object-cover" alt="Product 3" />
        <img src={product4} className="w-full h-auto object-cover" alt="Product 4" />
        <img src={product5} className="w-full h-auto object-cover" alt="Product 5" />
        <img src={product6} className="w-full h-auto object-cover" alt="Product 6" />
        <img src={product7} className="w-full h-auto object-cover" alt="Product 7" />
        <img src={product8} className="w-full h-auto object-cover" alt="Product 8" />
        <img src={product9} className="w-full h-auto object-cover" alt="Product 9" />
        <img src={product10} className="w-full h-auto object-cover" alt="Product 10" />
        <img src={product11} className="w-full h-auto object-cover" alt="Product 11" />
        <img src={product12} className="w-full h-auto object-cover" alt="Product 12" />
        <img src={product13} className="w-full h-auto object-cover" alt="Product 13" />
        <img src={product14} className="w-full h-auto object-cover" alt="Product 14" />
        <img src={product15} className="w-full h-auto object-cover" alt="Product 15" />
        <img src={product16} className="w-full h-auto object-cover" alt="Product 16" />
        <img src={product17} className="w-full h-auto object-cover" alt="Product 17" />
        <img src={product18} className="w-full h-auto object-cover" alt="Product 18" />
        <img src={product19} className="w-full h-auto object-cover" alt="Product 19" />
        <img src={product20} className="w-full h-auto object-cover" alt="Product 20" />
        <img src={product21} className="w-full h-auto object-cover" alt="Product 21" />
        <img src={product22} className="w-full h-auto object-cover" alt="Product 22" />
        <img src={product23} className="w-full h-auto object-cover" alt="Product 23" />
        <img src={product24} className="w-full h-auto object-cover" alt="Product 24" />
        <img src={product25} className="w-full h-auto object-cover" alt="Product 25" />
        <img src={product26} className="w-full h-auto object-cover" alt="Product 26" />
        <img src={product27} className="w-full h-auto object-cover" alt="Product 27" />
        <img src={product28} className="w-full h-auto object-cover" alt="Product 28" />
        <img src={product29} className="w-full h-auto object-cover" alt="Product 29" />
        <img src={product30} className="w-full h-auto object-cover" alt="Product 30" />
        <img src={product31} className="w-full h-auto object-cover" alt="Product 31" />
        <img src={product32} className="w-full h-auto object-cover" alt="Product 32" />
        <img src={product33} className="w-full h-auto object-cover" alt="Product 33" />
        <img src={product34} className="w-full h-auto object-cover" alt="Product 34" />
        <img src={product35} className="w-full h-auto object-cover" alt="Product 35" />
        <img src={product36} className="w-full h-auto object-cover" alt="Product 36" />
        <img src={product37} className="w-full h-auto object-cover" alt="Product 37" />
        <img src={product38} className="w-full h-auto object-cover" alt="Product 38" />
      </div>

      {/* Sticky WhatsApp Icon */}
      <div
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600 transition-colors z-50 whatsapp-icon"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Hero;