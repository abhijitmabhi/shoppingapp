import React from 'react'
import classes from '../ui/Card.module.css'

const Card = (props) => {
    return (
        <div className="card-deck pt-3 h-100">
            <div className="card shadow h-100">
                {/* <img src={props.image} className="img-fluid img-thumbnail" alt="..." /> */}
                <div className={props.isSale ? classes.bag_image : ''}>
                    <img src={props.image} className={'img-fluid img-thumbnail'} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary">{props.title}</h5>
                    <p className="card-text text-secondary">The is the description of the product.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Price: <b className="text-success">{props.footer}</b></small>
                </div>
            </div>
        </div>
    )
}

export default Card
