import React from 'react'

const ProductItem = (props) => {
    return (
        <div>
            <h5>{props.productName}</h5>
            <p>{props.price}</p>
        </div>
    )
}

export default ProductItem
