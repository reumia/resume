import React from 'react'
import _ from 'lodash'

import Item from './Item'
import List from './ItemList'

const Card = ({ data }) => {
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

    const renderTitle = () => {
        if (data.name) return (
            <div className="card-title">
                <span className="title">{ data.name }</span>
                <a href={ data.url } className="link">{ data.url }</a>
            </div>
        )
    }

    /* TODO : 제목 분기 필요 */
    return (
        <div className="card">
            { renderTitle() }
            <div className="card-contents">
                { renderContents() }
                { renderDescriptions() }
            </div>
        </div>
    )
}

export default Card