import React from 'react'
import '../../../css/nav-footer.css'

const Header = () => (
    <div id="nav" className="dashboard" style={{background: 'none'}}>
        <div className="nav-logo" onClick={() => (location.href = '/')}>
            <img src="/images/logos/logo(1).png" />WINGER
        </div>
        <div className="nav-elements" style={{marginLeft: 'auto'}}>Hi, {user.fname}</div>
        <div className="nav-elements signup" onClick={() => (location.href = '/users/logout')}>Logout</div>
    </div>
)

export default Header