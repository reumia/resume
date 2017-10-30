import React from 'react'

import LocaleString from './LocaleString'

const Item = ({ value, title }) => {
    return (
        <div className="item">
            <div className="item-title">
                <LocaleString string={ title }/>
            </div>
            <div className="item-contents">{ value }</div>
        </div>
    )
}

export default Item