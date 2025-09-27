import { useState, useEffect } from "react";
import produto1IMG from "../assets/produto1.jpg"
import produto2IMG from "../assets/Produto2.png"
import produto3IMG from "../assets/produto3.jpg"
import produto4IMG from "../assets/produto4.jpg"
import produto5IMG from "../assets/produto5.jpg"
import produto6IMG from "../assets/produto6.jpg"

export function ProductCard({ product }) {
  return (
    <div className="border border-gray-300 p-2 font-sans bg-gray-300 dark:bg-[#222] dark:border-[#444] transition-transform duration-150 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.8)] focus-within:outline focus-within:outline-2 focus-within:outline-[#10c9c9] focus-within:outline-offset-2" tabIndex={0}>

      <div className="w-full pt-[100%] bg-[rgba(114,114,253,0.521)] relative overflow-hidden">
          {product.tag && ( <span className={`absolute z-[500] top-1 left-1 text-white text-[10px] px-1 py-0.5 rounded-sm ${product.tag.toLowerCase() === "novo" ? "bg-green-600" : "bg-red-600"}`}>{product.tag}</span>)}
        <img src={product.image} alt={product.title} className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="font-bold text-sm overflow-hidden text-ellipsis dark:text-white 
  [display:-webkit-box] [-webkit-box-orient:vertical] 
  [-webkit-line-clamp:2] my-2 min-h-[2.4em]">{product.title}
      </div>

      <div className="flex justify-between text-xs dark:text-[rgb(6,144,179)]">
        <span>R$ {product.price.toFixed(2)}</span>
        <span>{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
      </div>

      <button  className="bg-transparent w-full border-0 text-[rgb(10,92,124)] focus:outline-1 focus:outline-[#10c9c9] focus:outline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:!outline-[#10c9c9] focus-visible:outline-offset-2 disabled:opacity-50 disabled:!cursor-not-allowed dark:text-[rgb(6,144,179)]"
      role="button" disabled={product.outOfStock} aria-label={`Adicionar ${product.title} ao carrinho`}>
        Adicionar
      </button>
    </div>
  );
}


export default function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([{
      title: "Dell 24 Monitor - P2422H - Full HD 1080p, IPS Technology, ComfortView Plus Technology",
      price: 2445.72,
      rating: 4,
      tag: "Novo",
      image: produto1IMG,
      outOfStock: false,
    },
    {
      title: "Smartphone Samsung Galaxy A05S, 128GB, 6GB RAM",
      price: 762.51,
      rating: 5,
      tag: "Promo",
      image: produto2IMG,
      outOfStock: false,
    },
    {
      title: "Mouse Sem Fio Recarregável 2.4g USB para Notebook",
      price: 19.00,
      rating: 3,
      tag: "Promo",
      image: produto3IMG,
      outOfStock: true,
    }, {
      title: "Caixa de Som Pc Computador Notebook Som Estereo Gamer com Usb P2 Led RGB, Alto-Falante Potente Mini caixa",
      price: 59.47,
      rating: 4,
      tag: "Novo",
      image: produto4IMG,
      outOfStock: true,
    },
    {
      title: "Geonav Teclado Multidispositivos Bluetooth, sem fio, Padrão ABNT2, Multissistemas, Teclas macias, Compacto, Autonomia de bateria, LED Indicador de bateria, OFTCW02SG, Cinza espacial/Preto",
      price: 169.00,
      rating: 2,
      tag: "Promo",
      image: produto5IMG,
      outOfStock: true,
    },
    {
      title: "Fone Headphone Bluetooth Tune 720BT, Preto, JBLT720BTBLK, HARMAN JBL",
      price: 379.05,
      rating: 4,
      tag: "Novo",
      image: produto6IMG,
      outOfStock: false,
    }]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
   <div className="grid gap-4 mt-[55px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-gray-300 p-2 font-sans bg-gray-300 dark:bg-[#222] dark:border-[#444] transition-transform duration-150 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.8)] dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.8)] focus-within:outline focus-within:outline-2 focus-within:outline-[#10c9c9] focus-within:outline-offset-2">
             <div className="skeleton h-[300px] bg-[#e0e0e0] dark:bg-[#3a3a3a] rounded relative overflow-hidden">
              <div  className="skeleton h-[300px] aspect-square mb-4"></div>
              <div className="skeleton h-[1.8em] my-2"></div>
              <div className="skeleton h-4 w-full mb-1 rounded"></div>
              <div className="skeleton h-8 w-full rounded-md"></div>
             </div>
            </div>
          ))
        : products.map((p, index) => <ProductCard key={index} product={p} />)}
    </div>
  );
}