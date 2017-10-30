import React from 'react'

const Header = ({ profile, className }) => {
    const buttons = profile.socials.map((item, key) => {
        return <a href={ item.url } className="profile-button" key={ key }>{ item.name }</a>
    })

    return (
        <header className={ className }>
            <div className="profile-image" style={{ backgroundImage: `url(${profile.image})` }}/>
            <h1 className="profile-title">{ profile.name }</h1>
            <div className="profile-descriptions">{ profile.descriptions }</div>
            <div className="profile-buttons">
                { buttons }
            </div>
        </header>
    )
}

export default Header