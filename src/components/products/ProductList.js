import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product) => {
                return <ProductItem
                    key={product.index}
                    isSale={product.isSale}
                    price={product.price}
                    productImage={product.productImage}
                    productName={product.productName}
                    type={product.type}
                />
            })}
        </div>
    )
}

export default ProductList
