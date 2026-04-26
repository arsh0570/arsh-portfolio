import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import FloatingControls from './components/FloatingControls';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { NavbarProvider } from './context/NavbarContext';

const ThemedMain = ({ children }) => {
  const { theme } = useTheme();
  return (
    <main className={`min-h-screen ${theme === 'day' ? 'bg-slate-300/20' : 'bg-gray-900/90'}`}>
      {children}
    </main>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavbarProvider>
        <Router>
          <ThemedMain>
            <Logo />                 {/* Always visible */}
            <FloatingControls />     {/* Always visible */}
            <Navbar />               {/* Can be hidden */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ThemedMain>
        </Router>
      </NavbarProvider>
    </ThemeProvider>
  );
};

export default App;