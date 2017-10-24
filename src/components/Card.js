import React from 'react'

const Card = ({ data }) => {
    const renderDescriptions = string => {
        if (string) return <div className="card-descriptions">{ string }</div>
        else return false
    }

    const renderLink = string => {
        if (string) return <a href={ string } className="card-link">{ string }</a>
        else return false
    }

    return (
        <div className="card">
            <div className="card-title">{ data.name }</div>
            { renderDescriptions(data.descriptions) }
            { renderLink(data.url) }
        </div>
    )
}

export default Card