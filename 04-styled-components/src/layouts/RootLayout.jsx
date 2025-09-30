import { Outlet } from "react-router";
import Navbar from "../components/NavBar";

export default function RootLayout({ theme, toggleTheme }) {
  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}