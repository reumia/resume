import React from 'react'

const Header = ({ profile, className }) => (
    <header className={ className }>
        <h1 className="header-title">Resume</h1>
        <div className="header-contents">
            <div className="texts">
                { profile.name }
                { profile.email }
            </div>
            <div className="image">

            </div>
        </div>
    </header>
)

export default Header