import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon'
import Cart from '../cart/cart'

import React from 'react'
import { connect } from 'react-redux'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import { selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import { auth } from '../../firebase/firebase.utils'
const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                {
                    currentUser ?
                        (<div className="option"
                            onClick={() =>
                                auth.signOut()}>
                            SIGN OUT
                        </div>)
                        :
                        (<Link className='option'
                            to='/signin'>
                            SIGN IN
                        </Link>)

                }
                <CartIcon />
            </div>
            {
                hidden ? null : <Cart />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
