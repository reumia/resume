import React from 'react'
import _ from 'lodash'

import Item from './Item'

const Card = ({ data }) => {
    const renderLink = string => {
        if (string) return <a href={ string } className="link">{ string }</a>
        else return false
    }

    const renderContents = () => {
        let contents;
        const contentsData = _.omit(data, [ 'name', 'url' ])

        if (contentsData) {
            contents = _.map(contentsData, (item, key) => {
                if (Array.isArray(item)) {
                    let array = item.map((value, index) => <span className="text" key={ index }>{ value }</span>)
                    return <Item key={ key } value={ array } title={ key } />
                } else {
                    if (item.length > 0) return <Item key={ key } value={ item } title={ key }/>
                    else return false
                }
            })

            return contents
        } else return false
    }

    return (
        <div className="card">
            <div className="card-title">
                <span className="title">{ data.name }</span>
                { renderLink(data.url) }
            </div>
            <div className="card-contents">
                { renderContents() }
            </div>
        </div>
    )
}

export default Card