import React from "react";
import img from "./assets/dec.png";

class CartItem extends React.Component {
  

  testing(){
    const promise = new Promise((res,rej) => {
      setTimeout(() => {
        res('done');
      },5000);
    })
    promise.then(()=> {
      this.setState({qty:100});
      console.log('state',this.state);
    })
  }

  increaseQuantity = () => {
    // this.state.qty += 1;
    // console.log('this',this.state)

    // //(object form of set state)
    // this.setState({
    //   qty: this.state.qty + 1
    // })


    ////(passing call back function)
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    },() => {
      console.log("this.state",this.state)
    });
   
  };

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }

    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {

    console.log('this.props',this.props);
    // object destructuring    
    const { price, title, qty } = this.props.product;

    return (
      <div className="cart-item">
        {this.props.jsx}
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
              onClick={this.increaseQuantity}
            />

            <img
              alt="decrease"
              className="action-icons"
              src={img}
              onClick={this.decreaseQuantity}
            />

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
