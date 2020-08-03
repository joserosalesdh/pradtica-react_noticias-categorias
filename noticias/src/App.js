import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Category from './components/Category'
// import News from './components/News'

class App extends Component {
  render(){
    const {categories} = this.props
    return (
      <div className="App">
        <Category categories= {categories}/>
        {/* <News /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {Categorias:{data: categories}} = state //Categorias es importante xq cuando nosotros hacemos un destructuring de mas de un nivel en este caso la variable Categorias no va a quedar definida... esta sintaxis lo que hace es que de Categorias metete y saca la propiedad de data y que le cambies el nombre a categories, es como agregarle un alias 
  return {
    categories, 
  }
}
const mapDispatchToProps = dispatch => ({})
export default connect (mapStateToProps, mapDispatchToProps)(App);
