import React from 'react'
import _ from 'lodash'

import Item from './Item'
import List from './ItemList'

const Card = ({ data }) => {
    const renderLink = string => {
        if (string) return <a href={ string } className="link">{ string }</a>
        else return false
    }

    const renderContents = () => {
        let contents;
        const contentsData = _.omit(data, [ 'name', 'url', 'descriptions' ])

        if (contentsData) {
            contents = _.map(contentsData, (item, key) => {
                return <Item key={ key } value={ item } title={ key } />
            })

            return contents
        } else return false
    }

    const renderDescriptions = () => {
        const contents = data.descriptions

        if (contents && contents.length > 0) return <List value={ contents } title='descriptions' />
        else return false
    }

    return (
        <div className="card">
            <div className="card-title">
                <span className="title">{ data.name }</span>
                { renderLink(data.url) }
            </div>
            <div className="card-contents">
                { renderContents() }
                { renderDescriptions() }
            </div>
        </div>
    )
}

export default Card