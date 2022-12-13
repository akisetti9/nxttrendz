import CartContext from '../../context/CartContext'

import './index.css'

// Write your code here
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      const amountList = cartList.map(each => each.price * each.quantity)
      const totalAmount = amountList.reduce((total, amount) => total + amount)
      return (
        <div className="cart-summary-container">
          <div className="cart-summary-details">
            <h1 className="order-total">
              Order Total:{' '}
              <span className="total-amount">Rs {totalAmount}/-</span>
            </h1>
            <p className="cart-items-length">{cartLength} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
