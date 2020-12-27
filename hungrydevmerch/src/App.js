import React from "react";
import {Route, Switch } from 'react-router-dom'

import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import ShopPage from './pages/shop/shoppage.jsx'
import Header from './components/header/header.jsx'
import SignInSignUp from './pages/signin-signup/signin-signup.jsx'
function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route  path='/shop' component={ShopPage}/>
                <Route  path='/signin' component={SignInSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
