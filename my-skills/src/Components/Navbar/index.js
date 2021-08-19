import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './styles.css'
import {BsBoxArrowInRight} from "react-icons/bs"
import { Redirect, Link } from 'react-router-dom'
import { BotaoFlutuante } from '../BotaoFlutuante'

export const Navbar = () => {

       const token = localStorage.getItem("token");

       const history = useHistory();
        const goLogin = () => history.push('login');

        function handleLogout(){
        localStorage.removeItem('token');
        history.push('login');
    }
    return (
        <>
        <div className="nav">
            <Link to={"/home"} style={{textDecoration: "none"}}> 
            <div className="title">
                MySkills
            </div>
            </Link>
            <div className="aba" id="link" onClick={handleLogout}>
            Sair
            <BsBoxArrowInRight color="#ffffff" size="25px"/>
            </div>
            {(!token) ? <Redirect push to="/login"/> : null }
        </div>
            <BotaoFlutuante/> 
        </>
    )
}