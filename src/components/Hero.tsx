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

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 p-4">
      <img src={home} className="w-full h-auto object-cover" alt="home" />
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
    </div>
  );
};



export default Hero;
