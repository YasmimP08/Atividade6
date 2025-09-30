import { useState, useEffect } from "react";
import produto1IMG from "../assets/produto1.jpg"
import produto2IMG from "../assets/Produto2.png"
import produto3IMG from "../assets/produto3.jpg"
import produto4IMG from "../assets/produto4.jpg"
import produto5IMG from "../assets/produto5.jpg"
import produto6IMG from "../assets/produto6.jpg"
import styled, { keyframes } from "styled-components"

export const ProductButton = styled.button`
  margin-top: 8px;
  width: 100%;
  padding: 4px;
  cursor: pointer;
  transition: background 200ms ease, color 200ms ease, transform 150ms ease;

  /* Variante "solid" */
  ${({ variant, theme }) =>
    variant === "solid" &&
    `
    background: ${theme.mode === "light" ? "rgb(10, 92, 124)" : "rgb(6, 144, 179)"};
    color: white;
    border: none;

    &:hover {
      background: ${theme.mode === "light" ? "rgb(15, 125, 168)" : "rgb(15, 180, 200)"};
    }
  `}

  &:focus-visible {
    outline: 2px solid #10c9c9;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 8px 0;
  min-height: 2.4em;
`

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`

export const ProductImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* mantém proporção quadrada */
  background: rgba(114, 114, 253, 0.521);
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ProductTag = styled.span`
  position: absolute;
  z-index: 500;
  top: 4px;
  left: 4px;
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 2px;
  background: ${({ variant }) =>
    variant === "novo" ? "green" :
    variant === "promo" ? "red" : "gray"};
`

export const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => (theme.mode === "light" ? "#ddd" : "#444")};
  padding: 8px;
  font-family: sans-serif;
  background: ${({ theme }) => (theme.mode === "light" ? "rgb(204, 204, 204)" : "#222")};
  transition: transform 150ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) =>
      theme.mode === "light"
        ? "0 4px 12px rgba(0,0,0,0.8)"
        : "0 4px 12px rgba(255, 255, 255, 0.8)"};
  }

  &:focus-within {
    outline: 2px solid #10c9c9;
    outline-offset: 2px;
  }
`
export const CardsContainer = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 55px;
  padding: 10px;

  @media (max-width: 480px) { grid-template-columns: 1fr; }
  @media (min-width: 481px) and (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 769px) and (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 1025px) { grid-template-columns: repeat(4, 1fr); }
`;

const pulse = keyframes`
  0% { left: -150px; }
  50% { left: 100%; }
  100% { left: 100%; }
`;

const SkeletonBase = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "#e0e0e0" : "#3a3a3a"};
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: ${pulse} 1.5s infinite;
  }
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height:300px;
  aspect-ratio: 1 / 1;
  margin-bottom: 1rem;
`;

export const SkeletonTitle = styled(SkeletonBase)`
  height: 1.8em;
  margin: 8px 0;
`;

export const SkeletonText = styled(SkeletonBase)`
  height: 1rem;
  width: 100%;
  margin-bottom: 0.25rem;
`;

export const SkeletonButton = styled(SkeletonBase)`
  height: 2rem;
  width: 100%;
  border-radius: 0.375rem;
`;

export function ProductCard({ product }) {
  return (
    <CardWrapper tabIndex={0}>

     <ProductImageWrapper>
  {product.tag && (
    <ProductTag variant={product.tag.toLowerCase()}>
      {product.tag}
    </ProductTag>
  )}
  <img src={product.image} alt={product.title} loading="lazy" />
    </ProductImageWrapper>

      <ProductTitle>{product.title}</ProductTitle>

      <ProductInfo>
  <span>R$ {product.price.toFixed(2)}</span>
  <span>{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
      </ProductInfo>

      <ProductButton
  variant="solid"
  role="button"
  disabled={product.outOfStock}
  aria-label={`Adicionar ${product.title} ao carrinho`}>
    Adicionar
  </ProductButton>

    </CardWrapper>
  );
}


export default function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState("light");

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
   <CardsContainer>
      {loading ? Array.from({ length: 6 }).map((_, i) => (
            <CardWrapper key={i}>
               <SkeletonImage />
        <SkeletonTitle />
        <SkeletonText />
        <SkeletonButton />
            </CardWrapper>
          ))
        : products.map((p, index) => <ProductCard key={index} product={p} />)}
    </CardsContainer>
  );
}