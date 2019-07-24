import React, { Component } from 'react'
import './searchbar.css'
export default class SearchBar extends Component {


sendSearchText = (e) => {
  this.props.handleSearchText(e.target.value)
}

sendCheck = (e) =>{
  this.props.handleCheck(e.target.value)
}


  render() {
    return (
      <div className="searchbar">
      <div className="field has-addons">
     <div className="control searchbarCon">
       <legend>Search</legend>
       {/* the onChange is going to execute each time the input changes */}
     <input className="input bar" type="text" placeholder="Search" onChange = {this.sendSearchText} />
     </div>
      </div>
      <input type="checkbox" onClick={this.sendCheck}></input>
      <label>Only show items in stock</label>
      </div>
    )
  }
}
