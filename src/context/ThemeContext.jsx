import React, { createContext, useState } from 'react';

// Create the Theme Context
export const ThemeContext = createContext();

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
