import React from 'react'

import LocaleString from './LocaleString'

const ItemList = ({ value, title }) => {
    const listItems = value.map((item, key) => {
        return <li className="list-item" key={ key }>{ item }</li>
    })

    return (
        <div className="list">
            <div className="list-title">
                <LocaleString string={ title }/>
            </div>
            <ul className="list-contents">{ listItems }</ul>
        </div>
    )
}

export default ItemList