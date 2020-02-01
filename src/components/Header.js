import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>👋 My name is Marco Domenico Tundo.</strong> I write code and manage high performing teams.</h1>
                    <br /><br />
                </div>
                <Footer />
            </header>
        )
    }
}
// <a href="https://acadium.com?utm_campaign=marcotundo.com">Acadium.com</a>
export default Header
