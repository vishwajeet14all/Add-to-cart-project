import React from "react";
import img from "./assets/dec.png";

class CartItem extends React.Component {
  // adding state it is js object
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
  }

  increaseQuantity = () => {
    console.log('this',this.state)
  }
  
  render() {
    // object destructuring
    const { price, title, qty } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img alt="" style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4="
              onClick ={this.increaseQuantity}
            />
            <img alt="decrease" className="action-icons" src={img} />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
