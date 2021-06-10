import React from 'react'

const Filter = (props) => {
    return (
        <div className="container pt-3 px-0">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default Filter
