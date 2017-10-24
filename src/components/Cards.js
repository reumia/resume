import React from 'react'
import Card from './Card'

const Cards = ({ title, data }) => {
    const cards = data.map((item, key) => <Card data={ item } key={ key } />)

    return (
        <div className="cards-wrap">
            <div className="cards-title">{ title }</div>
            <div className="cards">
                { cards }
            </div>
        </div>
    )
}

export default Cards