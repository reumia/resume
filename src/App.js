import React, { Component } from 'react'
import data from './data'
import moment from 'moment'
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
    workedYears = moment(this.resume.startAt).fromNow(true)

    render () {
        return (
            <div className="app">
                <Header className="app-header" profile={this.profile} />
                <main className="app-body">
                    <Cards title={`경력 : ${this.workedYears}차`} data={ this.resume.companies } />
                    <Cards title="참여 프로젝트" data={ this.resume.projects } />
                    <Cards title="개인 프로젝트" data={ this.resume.personals } />
                </main>
                <Footer className="app-footer" />
            </div>
        )
    }
}

export default App
