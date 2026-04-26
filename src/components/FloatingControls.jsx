import { useTheme } from '../context/ThemeContext.jsx';
import { useNavbar } from '../context/NavbarContext';

const FloatingControls = () => {
  const { theme, toggleTheme } = useTheme();
  const { isNavbarVisible, toggleNavbar } = useNavbar();

  return (
    <div className="fixed top-4 right-14 z-30 flex gap-2">
      <button
        onClick={toggleNavbar}
        className="p-2 rounded-full bg-gray-200 dark:bg-myblue-700 text-xl shadow-lg"
        aria-label="Toggle navigation"
      >
        {isNavbarVisible ? '✕' : '☰'}
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-myblue-700 text-xl shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === 'day' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default FloatingControls;