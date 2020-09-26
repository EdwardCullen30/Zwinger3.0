import React from 'react'
import '../../../css/nav-footer.css'

const Header = () => (
    <div id="nav" className="dashboard">
        <div className="nav-logo" onClick={() => (location.href = '/')}>
            <img src="/images/logos/logo(1).png" />WINGER
        </div>
        <div className="nav-elements" style={{marginLeft: 'auto'}}>Home</div>
        <div className="nav-elements" onClick={() => (location.href = '/users/login')}>Login</div>
        <div className="nav-elements signup" onClick={() => (location.href = '/users/signup')}>Sign up</div>
    </div>
)

export default Header