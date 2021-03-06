import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import ShopPage from './pages/shop/shoppage.jsx'
import CheckoutPage from './pages/checkout/checkout.jsx'

import Header from './components/header/header.jsx'
import SignInSignUp from './pages/signin-signup/signin-signup.jsx'

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

class App extends React.Component {

    unsubscribeFromAuth = null;

    //subscribe to auth sign-in state changes
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            //check if user auth exist, if it does get user data
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                //when listen to snapshot changes,assign user to current user state
                userRef.onSnapshot((snapShot) => {
                    this.props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }

            //when the user logs out, since we are subscribed
            //via onAuthStateChanged. set the current user state to null
            else {
                this.props.setCurrentUser(userAuth)
            }
        })
    }

    //close subscription to avoid memory leak by assigning auth to null
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
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin'
                        render={() => this.props.currentUser ?
                            (<Redirect to='/' />) :
                            (<SignInSignUp />)} />
                </Switch>
            </div>
        );
    }
}

//get state from store.
//combinedReducers
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

//mapDispatchToProps  = (dispatch) =>({actionName: dispatch(action(payload))})
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

//connect(state, dispatchaction)(app)
export default connect(mapStateToProps, mapDispatchToProps)(App);