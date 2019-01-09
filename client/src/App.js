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
import ContactPage from "./components/ContactPage/ContactPage";
import ProtectedRoute from "./shared/ProtectedRoute";

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
            <Route path="/chart" component={Chart} />
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
            <ProtectedRoute
              path="/profile"
              component={Profile}
              redirectTo={"/"}
              token={token}
            />
            <ProtectedRoute
              path="/cart"
              component={Cart}
              redirectTo={"/"}
              token={token}
            />
            <Route path="/contact" component={ContactPage} />
            <Route exacpt path="/store/:id" component={ProductDetail} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withUser(App);
