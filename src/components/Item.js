import React from 'react'

const Item = ({ value, title }) => {
    return (
        <div className="item">
            <div className="item-title">{ title }</div>
            <div className="item-contents">{ value }</div>
        </div>
    )
}

export default Item