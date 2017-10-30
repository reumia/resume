import React from 'react'
import Card from './Card'
import LocaleString from "./LocaleString";

const Cards = ({ title, data }) => {
    const cards = data.map((item, key) => <Card data={ item } key={ key } />)

    return (
        <div className="cards-wrap">
            <div className="cards-title">
                <LocaleString string={ title }/>
            </div>
            <div className="cards">
                { cards }
            </div>
        </div>
    )
}

export default Cards