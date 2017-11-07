import React from 'react'

import LocaleString from './LocaleString'

const ItemList = ({ value, title }) => {
    const listItems = value.map((item, key) => {
        return <li className="item-list-item" key={ key }>{ item }</li>
    })

    return (
        <div className="item">
            <div className="item-title">
                <LocaleString string={ title }/>
            </div>
            <ul className="item-list">{ listItems }</ul>
        </div>
    )
}

export default ItemList