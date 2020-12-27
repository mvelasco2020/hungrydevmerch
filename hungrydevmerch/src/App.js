import React from "react";
import { Route, Switch } from 'react-router-dom'

import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import ShopPage from './pages/shop/shoppage.jsx'
import Header from './components/header/header.jsx'
import SignInSignUp from './pages/signin-signup/signin-signup.jsx'

import { auth } from '../src/firebase/firebase.utils'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({
                currentUser: user
            })
            console.log(this.state.currentUser)
        })
    }

    //close subscription to avoid memory leak
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInSignUp} />
                </Switch>
            </div>
        );
    }
}
export default App;