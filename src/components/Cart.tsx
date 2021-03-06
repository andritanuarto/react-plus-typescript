import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCss from './Cart.module.css';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // if ((e.target as HTMLElement).nodeName === 'SPAN') {
    //   (e.target as HTMLSpanElement).
    // }
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className={CartCss.cartContainer}>
        <button
          className={CartCss.button}
          type="button"
          onClick={this.handleClick}
        >
          <FiShoppingCart/>
          <span>2 pizza(s)</span>
        </button>
        <div
          className={CartCss.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;