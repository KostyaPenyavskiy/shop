import React from 'react';
import './SideBar.scss';

export const SideBar = () => (
  <aside className="sidebar">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#">
            Все
          </a>
        </li>
        <li className="nav__item">
          <a href="#">
            Плащи
          </a>
        </li>
        <li className="nav__item">
          <a href="#">
            Кроссовки
          </a>
        </li>
        <li className="nav__item">
          <a href="#">
            Рубашки
          </a>
        </li>
        <li className="nav__item">
          <a href="#">
            Брюки
          </a>
        </li>
      </ul>
    </nav>
    <input id="toggler" type="checkbox" className="sidebar__sort-toggle-checkbox" />
    <label className="sidebar__sort-toggle" htmlFor="toggler">
      Сортировать
    </label>
    <div className="sidebar__sorting">
      <p className="sidebar__sorting-field">От дорогих к дешевым</p>
      <p className="sidebar__sorting-field">От дешевых к дорогим</p>
      <p className="sidebar__sorting-field">Популярные</p>
      <p className="sidebar__sorting-field">Новые</p>
    </div>
  </aside>
);
