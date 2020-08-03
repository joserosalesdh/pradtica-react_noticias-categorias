import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import Category from './components/Category'
import {addCategory, selectCategory} from './reducers/Categorias'
import {addNews} from './reducers/Noticias'
import {reset} from 'redux-form'
import News from './components/News'

class App extends Component {
  render(){
    const {
      categories, 
      news,
      addCategory, 
      selectCategory, 
      selected, 
      addNews,
    } = this.props
    return (
      <div className="App">
        <Category 
          selectCategory={selectCategory} 
          addCategory={addCategory} 
          categories= {categories}
        />
        <News 
          addNews={addNews}
          selectedCategory={selected}
          news={news}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {Categorias:{data: categories, selected}} = state //Categorias es importante xq cuando nosotros hacemos un destructuring de mas de un nivel en este caso la variable Categorias no va a quedar definida... esta sintaxis lo que hace es que de Categorias metete y saca la propiedad de data y que le cambies el nombre a categories, es como agregarle un alias 
  const {Noticias:{data: news}} = state
  return {
    categories, 
    news: news.filter(x =>x.categoryId === selected),
    selected
  }
}
const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  selectCategory: payload => dispatch(selectCategory(payload)),
  addNews: payload => {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  }
})
export default connect (mapStateToProps, mapDispatchToProps)(App);
