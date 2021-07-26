import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TodoList from "./pages/TodoList";
import Information from "./pages/Information";
import Navbar from "./components/Navbar";
import Weather from "./pages/Weather";
import Costs from "./pages/Costs";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} component={Information} exact/>
          <Route path={'/about'} component={TodoList}/>
          <Route path={'/weather'} component={Weather}/>
          <Route path={'/costs'} component={Costs}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
