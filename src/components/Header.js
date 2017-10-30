import React from 'react'
import moment from 'moment'

const Header = ({ profile, className }) => {
    const localedStartAt = moment(profile.startAt).format('LL')
    const workedYears = moment(profile.startAt).fromNow(true)

    const buttons = profile.socials.map((item, key) => {
        return <a href={ item.url } className="profile-button" key={ key }>{ item.name }</a>
    })

    return (
        <header className={ className }>
            <div className="profile">
                <div className="profile-image" style={{ backgroundImage: `url(${profile.image})` }}/>
                <h1 className="profile-title">{ profile.name }</h1>
                <span className="profile-since">{ `(${workedYears}) ${localedStartAt} ~` }</span>
                <div className="profile-descriptions" dangerouslySetInnerHTML={{ __html: profile.descriptions }} />
                <div className="profile-buttons">
                    { buttons }
                </div>
            </div>
        </header>
    )
}

export default Header