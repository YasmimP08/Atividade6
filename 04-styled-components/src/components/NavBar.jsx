import { Sun, Moon, ShoppingCart } from "lucide-react";
import styled from "styled-components";

const NavbarWrapper = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0; left: 0; right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) =>
    theme.mode === "light" ? "rgb(5, 64, 141)" : "rgb(3, 41, 90)"};
  color: aliceblue;
  border-bottom: 1px solid ${({ theme }) =>
    theme.mode === "light" ? "#ddd" : "#444"};
  padding: 0.1rem 0.8rem;
  font-family: monospace;
  font-size: x-large;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ThemeButton = styled.button`
  background: none;
  margin-top: 3.2px;
  border: none;
  cursor: pointer;
  color: white;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    color: #bdffff;
  }

  &:focus-within {
    outline: 2px solid #10c9c9;
    outline-offset: 2px;
  }
`;

const Cart = styled.div`
  position: relative;
  margin-top: 2.5px;
  color: aliceblue;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    color: #bdffff;
  }

  &:focus-within {
    outline: 2px solid #10c9c9;
  }
`;

export default function Navbar({ theme, toggleTheme }) {
  return (
    <NavbarWrapper>
      <div>LOGO</div>
      <Actions>
        <ThemeButton
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </ThemeButton>

        <Cart tabIndex="0" role="button" aria-label="Carrinho">
          <ShoppingCart size={20} />
        </Cart>
      </Actions>
    </NavbarWrapper>
  );
}
