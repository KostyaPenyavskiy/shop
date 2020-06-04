import React, { useEffect, useState } from 'react';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { switchCart } from '../../store/actions/cartActions';

export const Header = () => {
  const cartToggler = useSelector(state => state.isCartHidden);
  const cartItems = useSelector(state => state.addedItems);
  const dispatch = useDispatch();
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const handleCartClick = () => {
    dispatch(switchCart(cartToggler));
  };

  useEffect(() => {
    setItemsQuantity(
      cartItems.reduce((accum, current) => accum + current.quantity, 0)
    );
  }, [cartItems]);

  return (
    <header className="header">
      <a className="header__logo-link">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <a className="header__cart" onClick={() => handleCartClick()}>
        <img src="./images/cart.svg" alt="logo" />
      </a>
      {cartItems.length > 0
        ? (
          <div className="cart-counter">
            {itemsQuantity}
          </div>
        )
        : ''
      }
    </header>
  );
};
