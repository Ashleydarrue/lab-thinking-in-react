import React, { Component } from 'react'
import './productrow.css'

function ProductRow (props) {

  console.log(props.stocked)
    return (
      <div className="eachrow">
        <p className={!props.eachProduct.stocked ? 'redrow' : '' }>{props.eachProduct.name}</p>
        <p  className={!props.eachProduct.stocked ? 'redrow' : '' }>{props.eachProduct.price}</p>
        
      </div>
    )
  
}

export default ProductRow;