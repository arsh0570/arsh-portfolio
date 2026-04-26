import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // default visible

  const toggleNavbar = () => {
    setIsNavbarVisible(prev => !prev);
  };

  return (
    <NavbarContext.Provider value={{ isNavbarVisible, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);