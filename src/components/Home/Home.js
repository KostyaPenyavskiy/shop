import React from 'react';
import './Home.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, changeSelectedImg } from '../../store/actions/cartActions';

export const Home = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleImgClick = (id, i) => {
    dispatch(changeSelectedImg(id, i));
  };

  return (
    <main className="content">
      {items.map(item => (
        <article key={item.id} className="product-card">
          <div
            className="product-card__img"
            style={{ backgroundImage: `url(${item.images[item.selectedImg]}` }}
            onClick={() => dispatch(addToCart(item.id))}
          />
          <div className="product-card__slider-isVisible product-card__slider">
            {item.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={i === item.selectedImg ? 'selected' : ''}
                onClick={() => handleImgClick(item.id, i)}
              />
            ))}
          </div>
          <div className="product-card__info" onClick={() => dispatch(addToCart(item.id))}>
            <p className="section">{item.section}</p>
            <p className="title">{item.title}</p>
            <button
              type="button"
              className="price"
            >
              <span>${item.price}</span>
            </button>
            <p className="count">{`На складе:${item.count}`}</p>
          </div>
        </article>
      ))}
    </main>
  );
};
