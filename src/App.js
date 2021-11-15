import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Pages/Home/Navigation/Navigation';
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
                        <Route exact path="/">
                            <Home />
                            <Footer />
                        </Route>
                        <Route path="/home">
                            <Home />
                            <Footer />
                        </Route>
                        <Route exact path="/products">
                            <Products />
                            <Footer />
                        </Route>
                        <PrivateRoute path="/products/:id">
                            <PurchaseProduct />
                            <Footer />
                        </PrivateRoute>
                        <PrivateRoute path="/userdashboard">
                            <UserDashboard />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                            <Footer />
                        </Route>
                        <Route path="/registration">
                            <Registration />
                            <Footer />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
