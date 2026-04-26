import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { useNavbar } from '../context/NavbarContext';

const Navbar = () => {
  const { theme } = useTheme();
  const { isNavbarVisible } = useNavbar();

  if (!isNavbarVisible) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 flex justify-center items-center py-4 px-4 ${theme === 'night' ? 'bg-transparent text-white' : 'bg-transparent text-black'}`}>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 text-base sm:text-lg font-medium">
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? 'text-blue-500' : (theme === 'day' ? 'text-black-500' : 'text-gray-300')
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            isActive ? 'text-blue-500' : (theme === 'day' ? 'text-black-500' : 'text-gray-300')
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? 'text-blue-500' : (theme === 'day' ? 'text-black-500' : 'text-gray-300')
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;