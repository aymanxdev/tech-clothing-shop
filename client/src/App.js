import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";

import "./App.css";

const Homepage = lazy(() => import("./pages/homepage/HomePage"));
const ShopPage = lazy(() => import("./pages/shop/ShopPage"));
const CheckoutPage = lazy(() => import("./pages/checkout/CheckoutPage"));
const SigninAndSignup = lazy(() =>
  import("./pages/signinAndSignup/SigninAndSignup")
);

const App = ({}) => {
  const currentUser = useSelector((state) => state.user.selectCurrentUser);
  const checkUserSession = useDispatch(checkUserSession());

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              return currentUser ? <Redirect to="/" /> : <SigninAndSignup />;
            }}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
