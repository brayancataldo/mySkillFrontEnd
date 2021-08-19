import React, { useState, useEffect } from 'react'
import './styles.css'
import '../../Global/styles.css'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa"
import axios from 'axios'
import { baseURL } from '../../Service/Api'
import { Link, Redirect } from 'react-router-dom'

export const Login = () => {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [users, setUsers] = useState();
    const [passwordShow, setPasswordShow] = useState(false);
    const [token, setToken] = useState();
    const [invalid, setInvalid] = useState(false);

    const visualizarpassword = () => {
        setPasswordShow(!passwordShow);
    };

    useEffect(() => {
      axios.get(`${baseURL}/user`)
    .then(response => {
      console.log(response.data)
      setUsers(response.data);
    })
    .catch((error) => {
    console.log('error ' + error);
    });
    }, [])

    function handleLogin() {
      var valid = -1;
    
      for (var i = 0; i < users.length; i++) {
        if (user == users[i].login && password == users[i].password) {
          valid = i;
          break;
        }
      }
      if (valid != -1) {
        setToken("valid")
        localStorage.setItem("token", "valid");
      } else {
        setInvalid(true);
      }
    }

    return (
        <div className="container">
        <div className="bloco">
            <input
            className="input"
              type="text"
            placeholder="Usuário"
             value={user}
             onChange={e => setUser(e.target.value)}
            />
            <input
            className="input"
            required type={passwordShow ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {!passwordShow ? <FaRegEyeSlash onClick={visualizarpassword} className="verSenha"/> : <FaRegEye onClick={visualizarpassword} className="verSenha"/>}
            <div>
            </div>
            <button className="button" onClick={handleLogin}>Entrar</button>
            {(token) ? <Redirect push to="/home"/> : null }
        </div>
            <div className="cadastro">Não possui cadastro? <Link to={`/cadastro`} > Cadastre-se agora </Link></div>
        </div>
    )
}