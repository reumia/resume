import React, {Component} from 'react'
import data from './data'
import moment from 'moment'
import 'moment/locale/ko'

class App extends Component {
    profile = data.profile
    startAt = `${moment(data.resume.startAt).fromNow(true)} 차`

    render () {
        return (
            <div className="app">
                <header className="app-header">
                    <h1 className="title">{ this.profile.name }</h1>
                </header>
                <main className="app-body">
                    { this.startAt }
                </main>
                <footer className="app-footer">

                </footer>
            </div>
        )
    }
}

export default App
