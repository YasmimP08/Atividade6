import { useEffect, useState } from "react"
import { Sun, Moon, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored) {
      setTheme(stored)
      document.body.className = stored
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.body.className = next
  }

  return (
    <header className="navbar">
      <div>LOGO</div>
      <div className="actions">
        <button onClick={toggleTheme} className="theme-btn"  aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}>
          {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
        </button>

        <div className="cart" tabIndex="0" role="button" aria-label="Carrinho">
          <ShoppingCart size={20}/>
        </div>
      </div>
    </header>
  )
}