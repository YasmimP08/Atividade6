import { Outlet } from "react-router"
import Navbar from "../components/NavBar"

export default function RootLayout() {
    return (
        <div className="bg-[#fff] text-[#111] dark:bg-[#111] dark:text-[#eee]">
            <Navbar />
            <main className="p-1">
                <Outlet />
            </main>
        </div>
    )
}