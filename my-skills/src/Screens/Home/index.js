import React,{useState, useEffect} from 'react'
import { Navbar } from '../../Components/Navbar'
import { Card } from '../../Components/Card'
import '../../Global/styles.css'
import './styles.css'
import axios from 'axios'
import { baseURL } from '../../Service/Api'

export const Home = () => {

    const [skills, setSkills] = useState()
    const [slider, setSlider] = useState()

    useEffect(() => {
        setSlider("slide-top");
        axios.get(`${baseURL}/skill`)
    .then(response => {
        // console.log(response.data)
        setSkills(response.data);
    })
    .catch((error) => {
    //   console.log('error ' + error);
    });
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="containerHome">
            {skills ? skills.map((skill)=> {
                 return <Card key={skill.id} id={skill.id} name={skill.name} version={skill.version} description={skill.description} imageURL={skill.imageURL} slider={slider} />
            }) : null}
            </div>
        </div>
    )
}