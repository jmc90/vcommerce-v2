import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withUser } from "./context/UserProvider";
import NavbarComponent from "./components/Navbar/Navbar";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Store from "./components/Store/Store";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/Store/ProductDetail";
import Chart from "./components/Chart/Chart";
import Pools from "./components/Pools/Pools";
import MarketPage from "./components/MarketPage/MarketPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ProtectedRoute from "./shared/ProtectedRoute";
import Wishlist from "./components/Wishlist/Wishlist";

class App extends Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <main>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/store" component={Store} />
            <Route path="/about" component={About} />
            <Route
              path="/login"
              render={routerProps =>
                token ? <Redirect to="/" /> : <LogIn {...routerProps} />
              }
            />
            <Route
              path="/register"
              render={routerProps =>
                token ? <Redirect to="/" /> : <Register {...routerProps} />
              }
            />
            <Route path="/contact" component={ContactPage} />
            <Route path="/chart" component={Chart} />
            <Route path="/pools" component={Pools} />
            <Route path="/market" component={MarketPage} />
            <Route exacpt path="/store/:id" component={ProductDetail} />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              redirectTo={"/"}
              token={token}
            />
            <ProtectedRoute
              path="/cart"
              component={Cart}
              redirectTo={"/login"}
              token={token}
            />
            <ProtectedRoute
              path="/wishlist"
              component={Wishlist}
              redirectTo={"/login"}
              token={token}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withUser(App);
