import React from 'react'
import jsonData from '../data/DummyData.json'
import ProductList from '../components/products/ProductList'

const Products = () => {
    return (
        <div>
           <ProductList products={jsonData} />
        </div>
    )
}

export default Products
