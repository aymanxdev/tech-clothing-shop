import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import signinAndSignup from "./pages/signinAndSignup/signinAndSignup";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signinAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
