import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">Header</div>
      <Switch>
        <Route path="/" exact render={() => <h1>Home</h1> } />
        <Route path="/category" render={() => <h1>Category</h1> } />
        <Route path="/single-meal" render={() => <h1>Single Meal</h1> } />
        <Route path="/search" render={() => <h1>Search</h1> } />
        <Route path="/my-meals" render={() => <h1>My Meals</h1> } />
      </Switch>
      <div className="footer">
        Footerr
      </div>
    </div>
  );
}

export default App;
