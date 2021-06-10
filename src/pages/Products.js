import React from 'react'
import jsonData from '../data/DummyData.json'
import ProductList from '../components/products/ProductList'
import Dropdown from '../components/ui/Dropdown'
import { useState } from 'react'
import Search from '../components/ui/Search'
import Filter from '../components/ui/Filter'

const Products = () => {
    const [products, setproducts] = useState(jsonData);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleProductsFilter = (e) => {
        let currentType = e.target.value;
        const updatedProducts = currentType !== "All" ?
            jsonData.filter(product => product.type.toLowerCase() === currentType.toLowerCase()) :
            jsonData;
        setproducts(updatedProducts);
    }

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newProductsList = jsonData.filter((product) => {
                return Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResults(newProductsList);
        } else {
            setSearchResults(jsonData);
        }
    }

    return (
        <div>
            <Filter>
                <Search term={searchTerm} searchKeyword={searchHandler} />
                <Dropdown onSelect={handleProductsFilter} />
            </Filter>
            {
                (searchTerm.length > 0 && searchResults.length === 0) ?
                    <div className="alert alert-danger mt-3" role="alert">
                        No Data Found!
                    </div> :
                    <ProductList products={searchTerm.length < 1 ? products : searchResults} />
            }
        </div>
    )
}

export default Products
