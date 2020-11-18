import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './Pizza';
import Cart from './Cart';
import AppCss from './App.module.css';
import PizzaSVG from '../svg/pizza.svg';

const App = () => {
  return (
    <div className={AppCss.container}>
      <div className={AppCss.header}>
        <PizzaSVG width={120} height={120} />
        <div className={AppCss.siteTitle}>Delicios Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map(pizza => {
          return <Pizza key={pizza.id} pizza={pizza} />
        })}
      </ul>
    </div>
  );
}

export default App;