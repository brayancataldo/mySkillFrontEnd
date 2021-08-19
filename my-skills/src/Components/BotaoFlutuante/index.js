import React from 'react'
import './styles.css'
import { Link, Redirect } from 'react-router-dom'
import {BsPlusCircleFill} from 'react-icons/bs'

export const BotaoFlutuante = () => {
    return (
        <>
        <Link to={"/create"}>
        <BsPlusCircleFill className="botaoFlutuante"></BsPlusCircleFill>
        </Link>
        </>
    )
}