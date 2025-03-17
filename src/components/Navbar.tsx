import { Flame as Flamingo } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/90 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Flamingo className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-white font-bold text-xl">Flamingo Car Care</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#certifications" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Certifications</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
