import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className='relative'>
      <div className='flex items-center justify-between mt-4 mx-3'>
        <div className='flex items-center justify-center gap-3 lg:gap-5'>
          <a href="#"><h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">Shubham <span className='text-blue-500 font-cursive'>Bhatia</span></h1></a>
          <a href="https://drive.google.com/file/d/1cuJ1HAqtWZJ9dy8rpzC6lUSB48InuNa7/view" target="_blank" rel="noopener noreferrer">
            <button type="button" className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-xs font-semibold px-2 py-1 rounded-full lg:text-sm lg:px-3'>
              Resume
            </button>
          </a>              
        </div>
        
        <nav className="hidden lg:flex justify-between items-center font-lato gap-8 text-gray-600">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="relative hover:text-black before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[1.5px] before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
              {item.text}
            </a>
          ))}
        </nav>

        <button className='lg:hidden z-50' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars />}
        </button>
      </div>

      
      <nav className={`fixed top-0 right-0 bottom-0 flex flex-col justify-center bg-gradient-to-b from-blue-500 to-teal-400 w-64 p-6 text-white transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {menuItems.map((item, index) => (
          <a key={index} href={item.href} className="py-2 text-lg font-lato transition-colors duration-200 relative hover:text-black before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[1.5px] before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full" onClick={toggleMenu}>
            {item.text}
          </a>
        ))}
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMenu}></div>
      )}
    </header>
  );
}

export default Header;