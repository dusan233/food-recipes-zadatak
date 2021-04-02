import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import {connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import MyMeals from './pages/MyMeals';
import SingleMeal from './pages/SingleMeal';


const mapStateToProps = state => ({
  isAuthenticated: state.authanticated
})

function App({isAuthenticated}) {
  return (
    <div className="App">
      <Header />
      
      <div className="main-content">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/single-meal/:recipeId" component={SingleMeal} />
        <Route path="/search/:recipeName" component={Search} />
        <Route path="/my-meals" render={() => {
          if(isAuthenticated) return <MyMeals />
          return <Redirect to="/" />
        }} />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);
