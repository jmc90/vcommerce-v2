import React, { Component } from "react";
import axios from "axios";
const authAxios = axios.create();

authAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      logInErrorMessage: "",
      registerErrorMessage: "",
      productAddedModalOn: false,
    };
  }

  register = userInfo => {
    axios
      .post("/auth/register", userInfo)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        this.setState({
          user: user,
          token: token,
          logInErrorMessage: "",
          registerErrorMessage: ""
        });
      })
      .catch(err => this.handleError(err.response.data.errMsg, "register"));
  };

  logIn = userInfo => {
    axios
      .post("/auth/login", userInfo)
      .then(res => {
        console.log(res.data);
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({
          user: user,
          token: token,
          logInErrorMessage: "",
          registerErrorMessage: ""
        });
      })
      .catch(err => {
        this.handleError(err.response.data.errMsg, "logIn");
      });
  };

  handleError = (err, errRoute) => {
    if (errRoute === "logIn") {
      this.setState({
        logInErrorMessage: err
      });
    } else if (errRoute === "register") {
      this.setState({
        registerErrorMessage: err
      });
    }
  };

  logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
      entries: [],
      singleEntry: {},
      user: {},
      token: ""
    });
  };

  addToWishList = (sku, quantity) => {
    authAxios
      .put(`/api/wishlist/add/${sku}`, { quantity })
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
      this.toggleItemAddedNotification()
  };

  removeFromWishlist = sku => {
    authAxios
      .put(`/api/wishlist/remove/${sku}`)
      .then(res => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  };

  toCartFromWish = (sku, quantity) => {
    authAxios
      .put(`/api/wishlist/tocart/${sku}`, { quantity })
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  };

  addToCart = (sku, quantity) => {
    authAxios
      .put(`/api/cart/add/${sku}`, { quantity })
      .then(res => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
      this.toggleItemAddedNotification()
  };

  removeFromCart = sku => {
    authAxios
      .put(`/api/cart/remove/${sku}`)
      .then(res => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleUserInfoEdit = updates => {
    authAxios
      .put("/api/user/userinfo", updates)
      .then(res => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  };

  toggleItemAddedNotification = () => {
    console.log(this.state.productAddedModalOn)
    if (this.state.productAddedModalOn){
      this.setState({productAddedModalOn: false})
    } else {
      this.setState({productAddedModalOn: true})
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          register: this.register,
          logIn: this.logIn,
          logOut: this.logOut,
          user: this.state.user,
          addToWishList: this.addToWishList,
          removeFromWishlist: this.removeFromWishlist,
          toCartFromWish: this.toCartFromWish,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          handleUserInfoEdit: this.handleUserInfoEdit,
          productAddedModalOn: this.state.productAddedModalOn,
          toggleItemAddedNotification: this.toggleItemAddedNotification,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

export const withUser = C => props => (
  <UserContext.Consumer>
    {value => <C {...props} {...value} />}
  </UserContext.Consumer>
);
