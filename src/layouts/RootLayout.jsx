import { Outlet } from "react-router"
import Navbar from "../components/NavBar"

export default function RootLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}