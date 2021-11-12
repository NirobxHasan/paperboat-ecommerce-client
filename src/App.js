import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Pages/Home/Navigation/Navigation';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import Service from './Pages/Home/Service/Service';
import Products from './Pages/Products/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Authentication/Login/Login';

function App() {
    return (
        <Router>
            <Navigation />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
