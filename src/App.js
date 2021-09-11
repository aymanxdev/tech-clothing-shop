import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
