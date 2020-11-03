import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.component";
import SignInAndUp from "./pages/sign-in-and-up/sign-in-and-up.component";

import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser == null ? (
                <SignInAndUp />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
