import React, { Component } from 'react'
import SearchBar from '../searchbar/SearchBar'
import  './filterableproducttable.css'
import ProductTable from '../producttable/ProductTable'


export default class FilterableProductTable extends Component {
  state = {
      products: [...this.props.products.data],
      searchText: '',
      isChecked: false,
  }

  handleSearchText = (searchText) =>{
    const filteredProducts = this.props.products.data.filter( product => {
      return product.name.toUpperCase().includes(searchText.toUpperCase())
    })

      this.setState({
        searchText,
        products: filteredProducts
      })
  }

  handleCheck = (check) => {
    if (this.state.isChecked){
      const filteredProducts = this.props.products.data.filter( product => {
        return product.name.toUpperCase().includes(this.state.searchText.toUpperCase())
      })
      this.setState({
        products: filteredProducts,
        isChecked:false
      })
    }else{
    const filteredProducts = this.state.products.filter( product => {
        return product.stocked
      })
      this.setState({
        products: filteredProducts,
        isChecked:true
      })
    }
   
  }

  render() {
    return (
      <div className="filtertable">
        <SearchBar handleSearchText={this.handleSearchText} handleCheck={this.handleCheck}/>
        {/* before state elevation */}
        {/* <ProductTable dataholder={this.props.products.data}/> */}
        {/* after state elevation */}
        <ProductTable dataholder={this.state.products}/>
      </div>
    )
  }
}
