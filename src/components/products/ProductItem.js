import React from 'react'
import Card from '../ui/Card'

const ProductItem = (props) => {
    return (
        <div>
           <Card 
                image={props.productImage}
                title={props.productName}
                footer={props.price}
                isSale={props.isSale}
            />
        </div>
    )
}

export default ProductItem
