import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Category from './components/Category'
import {addCategory} from './reducers/Categorias'
import {reset} from 'redux-form'
import News from './components/News'

class App extends Component {
  render(){
    const {categories, news,addCategory} = this.props
    return (
      <div className="App">
        <Category addCategory={addCategory} categories= {categories}/>
        <News news={news}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {Categorias:{data: categories}} = state //Categorias es importante xq cuando nosotros hacemos un destructuring de mas de un nivel en este caso la variable Categorias no va a quedar definida... esta sintaxis lo que hace es que de Categorias metete y saca la propiedad de data y que le cambies el nombre a categories, es como agregarle un alias 
  const {Noticias:{data: news}} = state
  return {
    categories, 
    news,
  }
}
const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  }
})
export default connect (mapStateToProps, mapDispatchToProps)(App);
