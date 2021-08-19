import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../Global/styles.css'
import './styles.css'

export const Cadastro = () => {

    const [user, setUser] = useState()
    const [senha, setSenha] = useState()
    const [senha2, setSenha2] = useState()
    const [passwordShow, setPasswordShow] = useState(false);
    const [autenticated, setAutenticated] = useState(false);
    const [senhasDiferentes, setSenhasDiferentes] = useState(false);
    const [slider, setSlider] = useState()

    useEffect(() => {
      setSlider("slide-top");
  }, [])

    const visualizarSenha = () => {
        setPasswordShow(!passwordShow);
    };

    function handleLogin(){
      // setAutenticated(true)
    }

    function handleSenha2(e){
        setSenha2(e.target.value)
        if(e.target.value != senha){
            setSenhasDiferentes(true);
        }
    }
    return (
        <div className="container">
        <div className="blocoCadastro" id={slider}>
            <input
            className="input"
              type="text"
            placeholder="Usuário"
             value={user}
             onChange={e => setUser(e.target.value)}
            />
            <input
            className="input"
            required type={passwordShow ? "password" : "text"}
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <input
            className="input"
            required type={passwordShow ? "password" : "text"}
              placeholder="Repita a senha"
              value={senha2}
              onChange={handleSenha2}
            />
            {/* <FaRegEye onClick={visualizarSenha} /> */}
            <div>
            </div>
            <button className="button" onClick={handleLogin}>Cadastrar</button>
            {(autenticated) ? <Redirect push to="/home"/> : null }
        </div>
        </div>
    )
}