import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { switchCart } from '../../store/actions/cartActions';

export const Header = () => {
  const cartToggler = useSelector(state => state.isCartHidden);
  const cartItems = useSelector(state => state.addedItems);
  const dispatch = useDispatch();
  const [itemsQuantity, setItemsQuantity] = useState(0);

  const handleClick = () => {
    dispatch(switchCart(cartToggler));
  };

  useEffect(() => {
    setItemsQuantity(cartItems.reduce((accum, current) => accum + current.quantity, 0));
  }, [cartItems]);

  return (
    <header className="header">
      <Link to="/Home" className="header__logo-link">
        <img src="./images/logo.svg" alt="logo" />
      </Link>
      <Link to="/Home" className="header__cart" onClick={() => handleClick()}>
        <img src="./images/cart.svg" alt="logo" />
      </Link>
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
