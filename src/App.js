import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/index';

import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="page-wrapper">
      <Cart />
      <SideBar />
      <Home />
    </div>
  </Provider>
);

export default App;
