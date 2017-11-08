import React from 'react'

import LocaleString from './LocaleString'

const Item = ({ value, title }) => {
    let texts;

    if (Array.isArray(value)) {
        texts = value.map((item, index) => <span className="text" key={ index }>{ item }</span>)
    } else {
        texts = value
    }

    return (
        <div className="item">
            <div className="item-title">
                <LocaleString string={ title }/>
            </div>
            <div className="item-contents">{ texts }</div>
        </div>
    )
}

export default Item