import React, { Component } from 'react'

export default class NewsLists extends Component {
    render(){
        const {news} = this.props 
        return(
            <ul>
                {news.map(x => <li key = {x.id}>{x.name}</li>)}
            </ul>
        )
    }
}