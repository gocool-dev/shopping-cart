import React from 'react';
import './Header.css';

interface HeaderProps {
  cartData: {
    totalProducts: number;
    total: number;
  } | null;
  translations: {
    shoppingCart: string;
    cartContains: string;
    products: string;
    totalPrice: string;
  };
}

const Header: React.FC<HeaderProps> = ({ cartData, translations }) => {
  return (
    <div className="header-container">
      <div>
        <h1>{translations.shoppingCart}</h1>
        <p>
          {translations.cartContains} {cartData?.totalProducts || 0} {translations.products}
        </p>
      </div>
      <div>
        <p>{translations.totalPrice}: ${cartData?.total ? cartData.total.toFixed(2) : "0.00"}</p>
      </div>
    </div>
  );
};

export default Header;