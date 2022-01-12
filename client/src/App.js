import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/userActions";
import "./App.css";

const Homepage = lazy(() => import("./pages/homepage/HomePage"));
const ShopPage = lazy(() => import("./pages/shop/ShopPage"));
const CheckoutPage = lazy(() => import("./pages/checkout/CheckoutPage"));
const SigninAndSignup = lazy(() =>
  import("./pages/signinAndSignup/SigninAndSignup")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch(checkUserSession);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

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
