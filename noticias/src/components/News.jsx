import React, { Component } from 'react'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

export default class News extends Component {
    render() {
        const { news, addNews } = this.props
        return(
            <div>
                <NewsForm onSubmit = {addNews}/>
                <NewsList news={news}/>
            </div>
        )
    }
}