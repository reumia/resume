import React, { Component } from 'react'
import data from './data'
import _ from 'lodash'
import 'moment/locale/ko'

import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'

/**
 * TODO : 개발블로그 RSS 최근글 세개 연결
 * TODO : data.js Github Page 활용을 위한 Markdown 전환 고려
 */

class App extends Component {
    profile = data.profile
    resume = data.resume

    resumes = _.map(this.resume, (value, key) => {
        return <Cards key={ key } title={ key } data={ value } />
    })

    render () {
        return (
            <div className="app">
                <Header className="app-header" profile={this.profile} />
                <main className="app-body">
                    { this.resumes }
                </main>
                <Footer className="app-footer" />
            </div>
        )
    }
}

export default App
