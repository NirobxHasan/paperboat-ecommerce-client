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
import Registration from './Pages/Authentication/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import PurchaseProduct from './Pages/Products/PurchaseProduct/PurchaseProduct';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import UserDashboard from './Pages/UserDashboard/UserDashboard/UserDashboard';

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Navigation />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route exact path="/products">
                            <Products />
                        </Route>
                        <PrivateRoute path="/products/:id">
                            <PurchaseProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/userdashboard">
                            <UserDashboard />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/registration">
                            <Registration />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
