import { Outlet } from "react-router"
import Navbar from "../components/NavBar"

export default function RootLayout() {
    return (
        <div>
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}