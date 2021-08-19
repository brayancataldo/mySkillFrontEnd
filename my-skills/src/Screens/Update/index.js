import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { Navbar } from '../../Components/Navbar'
import { baseURL } from '../../Service/Api'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import './styles.css'
import '../../Global/styles.css'

export const Update = () => {

    const [slider, setSlider] = useState()
    const [name, setName] = useState()
    const [knowledgeLevel, setKnowledgeLevel] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [description, setDescription] = useState()
    const [imageURL, setImageURL] = useState()
    const [version, setVersion] = useState()
    const [concluido, setConcluido] = useState(false)
    const id = useParams();

    useEffect(() => {
        setSlider("slide-top");
        axios.get(`${baseURL}/userskill/${id.id}`)
    .then(response => {
        console.log(response.data)
        setName(response.data.skill.name)
        setDescription(response.data.skill.description)
        setKnowledgeLevel(response.data.knowledgeLevel)
        setVersion(response.data.skill.version)
        setImageURL(response.data.skill.imageURL)
    })
    .catch((error) => {
      console.log('error ' + error);
    });
    }, [])

    function handleRequest(){
        const body = {
            "id": id.id,
            "name": name,
            "version": version,
            "description": description,
            "imageURL": imageURL
          }
    axios.put(`${baseURL}/skill/update/${id.id}`, body)
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
            <button className="button" onClick={handleRequest}>Atualizar dados</button>
            {(concluido) ? <Redirect push to="/home"/> : null }
            </div>
            </div>
        </div>
    )
}