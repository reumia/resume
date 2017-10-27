import React from 'react'

const Header = ({ profile, className }) => {
    const buttons = profile.socials.map((item, key) => {
        return <a href={ item.url } className="header-button" key={ key }>{ item.name }</a>
    })

    return (
        <header className={ className }>
            <div className="header-profile" style={{ backgroundImage: `url(${profile.image})` }}/>
            <h1 className="header-title">{ profile.name }</h1>
            <div className="header-email">{ profile.email }</div>
            <div className="header-buttons">
                { buttons }
            </div>
        </header>
    )
}

export default Header