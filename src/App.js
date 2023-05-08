import React from "react";
// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./navbar";

class App extends React.Component {
  // adding state it is js object
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 10,
          title: "Watch",
          qty: 0,
          img: "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=",
          id: 1,
        },
        {
          price: 500,
          title: "Mobile Phone",
          qty: 0,
          img: "https://www.91-img.com/gallery_images_uploads/5/6/567bfe4aafdfef509b98b74a5e49028bc4e17741.JPG?tr=h-550,w-0,c-at_max",
          id: 2,
        },
        {
          price: 1000,
          title: "Laptop",
          qty: 0,
          img: "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A=",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("Hey please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Hey please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  getCartCount =() => {
    const{products} = this.state
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const{products} = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal;
  }



  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        <h3>TOTAL : {this.getCartTotal()}</h3>



      </div>
    );
  }
}

export default App;
