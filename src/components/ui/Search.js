import React, { useRef } from 'react'

const Search = (props) => {
    const inputElement = useRef("");
    const getSearchTerm = () => {
        props.searchKeyword(inputElement.current.value);
    }

    return (
        <div className="col-9">
            <input type="text" className="form-control" placeholder="Search by Product Name or Type"
                value={props.term} onChange={getSearchTerm} ref={inputElement}
            />
        </div>
    )
}

export default Search
