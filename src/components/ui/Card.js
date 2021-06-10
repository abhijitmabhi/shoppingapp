import React from 'react'
import classes from '../ui/Card.module.css'

const Card = (props) => {
    return (
        <div className="card-deck pt-3 h-100">
            <div className="card shadow h-100">
                <div className={props.isSale ? classes.bag_image : ''}>
                    <img src={props.image} alt="for product" className={'img-fluid img-thumbnail'} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary">{props.title}</h5>
                    <span className="badge bg-warning text-dark">{props.description}</span>
                    {/* <p className="card-text text-secondary">{props.description}</p> */}
                </div>
                <div className="card-footer">
                    <small className="text-dark">Price: <b className="text-primary">{props.footer}</b></small>
                </div>
            </div>
        </div>
    )
}

export default Card
