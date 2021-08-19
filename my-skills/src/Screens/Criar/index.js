import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { Navbar } from '../../Components/Navbar'
import { baseURL } from '../../Service/Api'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import './styles.css'
import '../../Global/styles.css'

export const Criar = () => {

    const [slider, setSlider] = useState()
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [knowledgeLevel, setKnowledgeLevel] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [description, setDescription] = useState()
    const [imageURL, setImageURL] = useState()
    const [version, setVersion] = useState()
    const [concluido, setConcluido] = useState(false)

    useEffect(() => {
        setSlider("slide-top");
    }, [])

    function handleRequest(){
        const body = {
            "id": id,
            "name": name,
            "version": version,
            "description": description,
            "imageURL": imageURL
          }
    axios.post(`${baseURL}/skill`, body)
    .then(response => {
        // console.log(response.data)
        setConcluido(true);
    })
    .catch((error) => {
      // console.log('error ' + error);
    });
    }

    return (
        <div>
            <Navbar/>
            <div className="containerHome">
            <div className="blocoUpdate" id={slider} >
            <input
            className="input"
              type="number"
            placeholder="Id"
             value={name}
             maxLength="50"
             onChange={e => setId(e.target.value)}
            />
            <input
            className="input"
              type="text"
            placeholder="Nome"
             value={name}
             maxLength="100"
             onChange={e => setName(e.target.value)}
            />
            <input
            className="input"
            type="text"
              placeholder="Descrição"
              value={description}
             maxLength="255"
              onChange={e => setDescription(e.target.value)}
            />
            <input
            className="input"
            type="text"
              placeholder="Version"
              value={version}
             maxLength="10"
              onChange={e => setVersion(e.target.value)}
            />
            <input
            className="input"
            type="text"
              placeholder="URL da imagem"
              value={imageURL}
               maxLength="255"
              onChange={e => setImageURL(e.target.value)}
            />
            <div>
            </div>
            <button className="button" onClick={handleRequest}>Criar Skill</button>
            {(concluido) ? <Redirect push to="/home"/> : null }
            </div>
            </div>
        </div>
    )
}