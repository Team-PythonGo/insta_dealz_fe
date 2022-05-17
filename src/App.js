import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import CheckoutItems from './components/Checkout';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Context';
import Search from './components/Search';
import logo from './images/logo.png';
import AboutUs from './components/AboutUs';
import { Figure } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
      productsCopy: [],
      search: '',
      selectedProduct: {},
    };
    this.routerRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    let user = localStorage.getItem('user');
    let cart = localStorage.getItem('cart');

    const products = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/`
    );
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : {};

    this.setState({
      user,
      products: products.data,
      cart,
      productsCopy: products.data,
    });
  }

  login = async (email, password) => {
    const res = await axios
      .post('http://localhost:3001/login', { email, password })
      .catch((res) => {
        return { status: 401, message: 'Unauthorized' };
      });

    if (res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken);
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === 'admin@example.com' ? 0 : 1,
      };

      this.setState({ user });
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  logout = (e) => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem('user');
  };

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };

  addToCart = (cartItem) => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = (cartItemId) => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem('cart');
    this.setState({ cart });
  };

  filterProducts = () => {
    const filtered = this.state.productsCopy.filter((product) =>
      product.name.includes(this.state.search)
    );
    this.setState({ products: filtered });
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value }, this.filterProducts);
  };

  checkout = () => {
    if (!this.state.user) {
      this.routerRef.current.history.push('/login');
      return;
    }

    const cart = this.state.cart;

    const products = this.state.products.map((p) => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/${p.id}`, { ...p });
      }
      return p;
    });

    this.setState({ products });
    this.clearCart();
  };
  handleSelectedProduct = (selectedProduct) => {
    console.log(selectedProduct);
    this.setState({
      selectedProduct,
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
          handleSelectedProduct: this.handleSelectedProduct,
          checkoutCart: this.checkoutCart,
          CheckoutItems: this.CheckoutItems,
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            <nav
              className="navbar container"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <Link to="/products">
                  <Figure.Image
                    width={200}
                    height={200}
                    src={logo}
                    alt="brandonImage"
                  />
                </Link>
                <b className="navbar-item is-size-4 "></b>
                <label
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </label>
              </div>
              <div
                className={`navbar-menu ${
                  this.state.showMenu ? 'is-active' : ''
                }`}
              >
                <Link to="/products" className="navbar-item">
                  Home
                </Link>
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-product" className="navbar-item">
                    Add Product
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: '5px' }}
                  >
                    {Object.keys(this.state.cart).length}
                  </span>
                </Link>
                <Link to="/checkout" className="navbar-item">
                  Checkout
                  <span style={{ marginLeft: '5px' }}></span>
                </Link>
                <Link to="/aboutus" className="navbar-item">
                  About the Team
                </Link>
                {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                ) : (
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Logout
                  </Link>
                )}
              </div>
              <Search
                handleChange={this.handleChange}
                search={this.state.search}
              />
            </nav>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={CheckoutItems} />
              <Route exact path="/aboutus" component={AboutUs} />
              {/* cant  pass state via component */}
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/products/:id" component={ProductDetail} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
