import React from 'react'

const Dropdown = (props) => {
    return (
        <div className="col-3">
            <div className="">
                <div className="">
                    <select className="form-select" onChange={props.onSelect}>
                        <option value="All">All</option>
                        <option value="Beer">Beer</option>
                        <option value="Wine">Wine</option>
                        <option value="Spirits">Spirits</option>
                        <option value="Cider">Cider</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
