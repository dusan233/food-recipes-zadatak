import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import MyMeals from './pages/MyMeals';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="main-content">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/single-meal/:recipeId" render={() => <h1>Single Meal</h1> } />
        <Route path="/search/:recipeName" component={Search} />
        <Route path="/my-meals" component={MyMeals} />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
