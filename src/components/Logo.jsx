import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink 
      to="/" 
      className="fixed top-4 left-14 z-30 w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
    >
      <p className="blue-gradient-text">AO</p>
    </NavLink>
  );
};

export default Logo;