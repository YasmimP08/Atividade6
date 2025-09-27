import { useEffect, useState } from "react"
import { Sun, Moon, ShoppingCart } from "lucide-react"
// npm install -D tailwindcss@3 postcss autoprefixer
// npx tailwindcss init -p

export default function Navbar() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
  const stored = localStorage.getItem("theme")
  if (stored) {
    setTheme(stored)
    document.documentElement.classList.toggle("dark", stored === "dark")
  }
}, [])

const toggleTheme = () => {
  const next = theme === "dark" ? "light" : "dark"
  setTheme(next)
  localStorage.setItem("theme", next)
  document.documentElement.classList.toggle("dark", next === "dark")
}

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-[9999] 
                    flex items-center justify-between
                    bg-[rgb(5,64,141)] border-b border-gray-300
                    px-3 py-[0.1rem] font-mono text-xl text-white
                    dark:bg-[rgb(3,41,90)] dark:border-gray-700">
      <div>LOGO</div>
      <div className="actions flex items-center gap-4">
        <button onClick={toggleTheme} className="theme-btn mt-[3.2px] bg-none border-none cursor-pointer hover:-translate-y-0.5 hover:text-[#bdffff] focus:outline-2 focus:outline-[#10c9c9] focus:outline-offset-2 transition-transform duration-150 ease-in-out"  aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}>
          {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
        </button>

        <div className="cart mt-[2.5px] relative cursor-pointer
                           hover:-translate-y-0.5 hover:text-[#bdffff]
                           focus:outline-2 focus:outline-[#10c9c9] focus:outline-offset-2
                           transition-transform duration-150 ease-in-out" tabIndex="0" role="button" aria-label="Carrinho">
          <ShoppingCart size={20}/>
        </div>
      </div>
    </header>
  )
}