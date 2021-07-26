import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/about'} component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
