import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class NewsForm extends Component {
    render(){
        const {handleSubmit} = this.props 
        return(
            <form onSubmit = {handleSubmit}> 
                <Field name = "name" placeholder= "Nombre de Noticia" component = "input"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'news', 
})(NewsForm)