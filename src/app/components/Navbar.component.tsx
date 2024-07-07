'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import useTheme from '../contexts/theme.context';
import useThemeStore from '../constants/ThemeZustand';
import { applyThemePreference } from '../utils/ThemeUtilities';
import { THEME_TYPES } from '../constants/ThemeConstant';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* const { themeMode, lightTheme, darkTheme } = useTheme();

  

  const onChangeBtn = (e:any) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  }; */



  const toggleTheme = useThemeStore((state:any) => state.toggleTheme);
  const theme = useThemeStore((state:any) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);



  const navbarTemplate = () => (
    <>
      <header className="flex items-center justify-between w-full px-8 py-4 bg-white shadow-md border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <div className="flex items-center space-x-4">
          <img src="image0.png" alt="Nexcent Logo" className="h-8" />
          <span className="text-xl font-bold text-black dark:text-white">Nexcent</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 dark:text-white">
          <Link href="#" className="text-gray-700 dark:text-white">
            Home
          </Link>
          <Link href="#" className="text-gray-700 dark:text-white">
            Service
          </Link>
          <Link href="#" className="text-gray-700 dark:text-white">
            Feature
          </Link>
          <Link href="#" className="text-gray-700 dark:text-white">
            Product
          </Link>
          <Link href="#" className="text-gray-700 dark:text-white">
            Testimonial
          </Link>
          <Link href="#" className="text-gray-700 dark:text-white">
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4 dark:text-white">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded dark:text-white">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-green-500 rounded dark:text-white">
            Sign up
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={toggleTheme}
              checked={theme === THEME_TYPES.THEME_DARK}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Theme</span>
          </label>
        </div>
        <div className="md:hidden dark:text-white">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-white">
            <FaBars size={24} />
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-800 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-start p-8 space-y-4">
          <Link href="#" className="block text-gray-700 dark:text-white">
            Home
          </Link>
          <Link href="#" className="block text-gray-700 dark:text-white">
            Service
          </Link>
          <Link href="#" className="block text-gray-700 dark:text-white">
            Feature
          </Link>
          <Link href="#" className="block text-gray-700 dark:text-white">
            Product
          </Link>
          <Link href="#" className="block text-gray-700 dark:text-white">
            Testimonial
          </Link>
          <Link href="#" className="block text-gray-700 dark:text-white">
            FAQ
          </Link>
          <div className="flex flex-col space-y-4 mt-4 w-full">
            <button className="w-full px-4 py-2 text-gray-700 bg-white rounded">
              Login
            </button>
            <button className="w-full px-4 py-2 text-white bg-green-500 rounded">
              Sign up
            </button>
            <label className="relative inline-flex items-center cursor-pointer w-full">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleTheme}
                checked={theme === THEME_TYPES.THEME_DARK}
              />

              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Dark</span>
            </label>
          </div>
        </nav>
      </div>
    </>
  );

  return <>{navbarTemplate()}</>;
};

export default Navbar;
