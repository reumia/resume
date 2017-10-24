import React from 'react'

const Header = ({ profile, className }) => (
    <header className={ className }>
        <h1 className="title">{ profile.name }</h1>
    </header>
)

export default Header