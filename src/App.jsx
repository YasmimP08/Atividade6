import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import ProductCard from "./pages/ProductCard"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ProductCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
