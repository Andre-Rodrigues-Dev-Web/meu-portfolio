import React from 'react';
import { ThemeProvider } from 'styled-components';

const themes = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
  },
  dark: {
    backgroundColor: '#333333',
    textColor: '#ffffff',
  },
};

const ThemeContext = React.createContext(themes.light);

const Theme = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.light);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
