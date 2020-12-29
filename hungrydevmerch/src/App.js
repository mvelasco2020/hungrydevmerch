import React from "react";
import { Route, Switch } from 'react-router-dom'

import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import ShopPage from './pages/shop/shoppage.jsx'
import Header from './components/header/header.jsx'
import SignInSignUp from './pages/signin-signup/signin-signup.jsx'

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    //subscribe to auth sign-in state changes
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            //check if user auth exist, if it does get user data
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                //when listen to snapshot changes,assign user to current user state
                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            }

            //when the user logs out, since we are subscribed
            //via onAuthStateChanged. set the current user state to null
            else{
                this.setState({
                    currentUser: userAuth
                })
            }
        })
    } s

    //close subscription to avoid memory leak
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
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