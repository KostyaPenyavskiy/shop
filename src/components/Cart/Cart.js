import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  switchCart,
  addQuantity,
  subtractQuantity
} from '../../store/actions/cartActions';
import './Cart.scss';

export const Cart = () => {
  const cartToggler = useSelector(state => state.isCartHidden);
  const cartItems = useSelector(state => state.addedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    if (cartToggler) {
      document.body.style.overflowY = 'unset';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }, [cartToggler]);

  const handleClick = () => {
    dispatch(switchCart(cartToggler));
  };

  return (
    <section className={!cartToggler ? 'cart' : 'cart cart-hidden'}>
      <div className="cart__wrapper">
        <label htmlFor="cart__toggler" className="cart__label" />
        <input
          style={{ display: 'none' }}
          id="cart__toggler"
          type="checkbox"
          checked={cartToggler}
          onChange={() => handleClick()}
        />
        {cartItems.length > 0
          ? (cartItems.map((item) => {
            if (!item) {
              return '';
            }

            return (
              <article key={item.id} className="item-card">
                <img src={item.images[0]} alt="item" className="item-card__img" />
                <div className="item-card__info">
                  <p className="info__title">{item.title}</p>
                  <div>
                    <span
                      className="decrease"
                      onClick={() => dispatch(subtractQuantity(item.id))}
                    >
                      -
                    </span>
                    <p className="info__quantity">{item.quantity}</p>
                    <span
                      className="increase"
                      onClick={() => dispatch(addQuantity(item.id))}
                    >
                      +
                    </span>
                  </div>
                  <p className="info__price">
                    $
                    {item.quantity * item.price}
                  </p>
                </div>
              </article>
            );
          }))
          : <span className="cart__empty">No items yet ;(</span>
        }
        <div className="cart__total-price">
          <p>Итого</p>
          <p>
            $
            {cartItems.reduce(
              (accum, current) => accum + (current.quantity * current.price), 0)
            || 0}
          </p>
        </div>
      </div>
      <button className="cart__buy">Купить</button>
    </section>
  );
};
