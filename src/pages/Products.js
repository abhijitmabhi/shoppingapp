import React from 'react'
import jsonData from '../data/DummyData.json'
import ProductList from '../components/products/ProductList'
import Dropdown from '../components/ui/Dropdown'
import { useState } from 'react'

const Products = () => {
    const [products, setproducts] = useState(jsonData);
    
    function handleProductsFilter (e) {
        let currentType = e.target.value;
        const updatedProducts = currentType !== "All" ?
             jsonData.filter(product => product.type.toLowerCase() === currentType.toLowerCase()) :
             jsonData;
        setproducts(updatedProducts);
    }

    return (
        <div>
            <Dropdown onSelect={handleProductsFilter} />
            <ProductList products={products} />
        </div>
    )
}

export default Products
