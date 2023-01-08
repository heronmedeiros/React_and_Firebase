import { BrowserRouter, Switch, Route } from 'react-router-dom';

// page components
import Home from './Pages/home/Home';
import Create from './Pages/home/Create';
import Search from './Pages/home/Search';
import Recipe from './Pages/home/Recipe';

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact to='/'>
            <Home />
          </Route>

          <Route to='/create'>
            <Create />
          </Route>

          <Route to='/search'>
            <Search />
          </Route>

          <Route to='/recipes/:id'>
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
