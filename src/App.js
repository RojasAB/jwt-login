import Login from "./pages/login";
import Register from "./pages/register";
import Forget from "./pages/sendLink";
import Reset from "./pages/reset";
import "./App.scss";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/forget" component={(props) => Forget(props)}></Route>
        <Route exact path="/reset/:code" component={(props) => Reset(props)}></Route>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
