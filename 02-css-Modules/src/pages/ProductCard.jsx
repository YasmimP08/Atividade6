import { useState, useEffect } from "react";
import productStyles from "../styleCSS/product.module.css";
import skeletonStyles from "../styleCSS/skeleton.module.css";

import produto1IMG from "../assets/produto1.jpg"
import produto2IMG from "../assets/Produto2.png"
import produto3IMG from "../assets/produto3.jpg"
import produto4IMG from "../assets/produto4.jpg"
import produto5IMG from "../assets/produto5.jpg"
import produto6IMG from "../assets/produto6.jpg"

export function ProductCard({ product }) {
  return (
    <div className={productStyles.productCard} tabIndex={0}>

      <div className={productStyles.productImageWrapper}>
        {product.tag && ( <span className={`${productStyles.productTag} ${product.tag.toLowerCase() === "novo" ? productStyles.novo : productStyles.promo}`}>{product.tag}</span>)}
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className={productStyles.productTitle}>{product.title}
      </div>

      <div className={productStyles.productInfo}>
        <span>R$ {product.price.toFixed(2)}</span>
        <span>{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
      </div>

      <button className={`${productStyles.productBtn} ${productStyles.solid}`} role="button" disabled={product.outOfStock} aria-label={`Adicionar ${product.title} ao carrinho`}>
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
    <div className={productStyles.cards}>
      {loading ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={productStyles.productCard}>
              <div className={`${skeletonStyles.skeleton} ${skeletonStyles.image}`}></div>
              <div className={`${skeletonStyles.skeleton} ${skeletonStyles.title}`}></div>
              <div className={`${skeletonStyles.skeleton} ${skeletonStyles.text}`}></div>
              <div className={`${skeletonStyles.skeleton} ${skeletonStyles.button}`}></div>
            </div>
          ))
        : products.map((p, index) => <ProductCard key={index} product={p} />)}
    </div>
  );
}