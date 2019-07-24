import React, { Component } from 'react'
import './producttable.css'
import ProductRow from '../productrow/ProductRow'

export default function ProductTable (props) {
  //  constructor(props){
  //    super(props)
  //   //  this.state = {
  //   //    allProducts: this.props.dataholder
  //   //   }
  //  }

  //  showProducts = () => {
  //   return props.dataholder.map((eachProduct, i)=>{
  //      return(<ProductRow key={i} eachProduct={eachProduct}/> )
  //    })
  //  }
  
  //in this function props is all the data
    
    return (
      <div className="table">
        <div className="tableHeading">
          <h3>Name</h3>
          <h3>Price</h3>
        </div>
       {
         props.dataholder.map((eachProduct, i)=>{
          return(<ProductRow key={i} eachProduct={eachProduct}/> )
        })
         }
      </div>
    )
  }

