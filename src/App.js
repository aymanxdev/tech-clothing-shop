import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";

const hats = (props) => {
  console.log(props);
  return <div>Hats page</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={hats} />
      </Switch>
    </div>
  );
}

export default App;
