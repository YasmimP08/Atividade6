import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/ProductCard";
import { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => (theme.mode === "light" ? "#fff" : "#111")};
    color: ${({ theme }) => (theme.mode === "light" ? "#111" : "#eee")};
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const themeObject = { mode: theme };

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<RootLayout theme={theme} toggleTheme={toggleTheme} />}
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
