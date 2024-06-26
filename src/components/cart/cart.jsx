import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";
import ListCart from "../cart/listCart";
import { useState } from "react";

export default function Cart({
  productsSelected,
  setCardValue,
  setProductsSelected,  setFinalized, finalized
}) {
  // Function to handle closing the cart
  const handleClose = () => {
    setCardValue(false); // Fecha a aba
    if(finalized === true){
      window.location.reload();
    }
  };

  // Function to prevent click events inside the cart from affecting elements outside of it
  const handleClickInside = (e) => {
    e.stopPropagation(); //// Prevents clicks inside the cart from affecting elements outside
  };

  return (
    <CartContainer onClick={handleClickInside}>
      <CartTop>
        <h1>Carrinho de compras</h1>
        <CloseIcon onClick={() => handleClose()} />
      </CartTop>
      {productsSelected.length > 0 ?  <ListCart
        productsSelected={productsSelected}
        setProductsSelected={setProductsSelected}
        finalized={finalized} setFinalized={setFinalized}
      /> : <p className="notice">Adicione itens no seu carrinho!</p>}
     
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 31.5%; 
  height: 100%;
  position: relative;
  background-color: #0f52ba;
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 667px) {
    width: 100%;
    height: 100%;
  }
  .notice{
    font-size: 30px ;
    font-weight: bold;
    position: fixed;
    top: 50%;
    @media (max-width: 667px) {
    left: 0%;
  }
  }
`;

const CartTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 30px !important;
    color: #f8f8f8 !important;
    @media (max-width: 667px) {
  font-size: 23px !important;
}
  }
 
  
`;

const CloseIcon = styled(IoMdCloseCircle)`
  width: 38px;
  height: 38px;
  color: black;
  cursor: pointer;
  @media (max-width: 667px) {
    width: 30px;
  }
`;
