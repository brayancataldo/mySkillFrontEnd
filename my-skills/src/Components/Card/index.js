import React, { useEffect, useState } from 'react'
import './styles.css'
import {AiFillPicture} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import { Link, Redirect } from 'react-router-dom'

export const Card = (props) => {

    const [slider, setSlider] = useState()

    return (
        <>
        <div className="card" id={props.slider}>
            <div className="row">
            <div className="item" id="name"> {props.name}</div>
            <Link to={`/update/${props.id}`}>
            <div className="edit">
            <BiEdit></BiEdit>
            </div>
            </Link>
            </div>
            <img src={props.imageURL} className="icon"/>
            <div className="item"> {props.version}</div>
            <div className="item"> {props.description}</div>
            
            </div>
        </>
    )
}

