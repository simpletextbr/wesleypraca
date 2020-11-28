import React, {useState} from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { Icon } from '@iconify/react';
import Icons from './Icons';
import './Techs.css'

export default function Techs(){
    const [ clicked, setClicked] = useState(true)
    const [ selectedId, setSelectedId] = useState(0)

    const handleClickOpen = (id) => {
        setClicked(false)
        setSelectedId(id)
    }

    const handleClickClose = () => {
        setClicked(true)
        setSelectedId(0)
        
    }

   

    return(
        <div id="#techs" className="aboutTechs">
            <h1>TECHNOLOGIES</h1>
            <div className="list-techs">
                {Icons.map(icon => (
                <div className="tech" key={icon.id}>
                    <Icon icon={icon.type} style={{fontSize: icon.size}} />
                    <h3>{icon.name}</h3>
                    {selectedId===0 && clicked===true ?
                    <div className="hidden" onClick={() => handleClickOpen(icon.id)}>
                        <FiChevronDown className="hiddenChevron" size={60} color="#000" />
                    </div> : selectedId===icon.id ?
                    <div className="shown" onClick={handleClickClose}>
                        <FiChevronUp className="hiddenChevron" size={60} color="#000" style={{ alignSelf: "center"}}/>
                        <label>Nivel de Experiência</label>
                        <div className="progress">
                            <div className="progress--bar" style={{width: `${icon.Hability}%`}}>
                                <p>{icon.Hability}%</p>
                            </div>
                        </div>
                    </div>
                    :   
                    <div className="hidden" onClick={() => handleClickOpen(icon.id)}>
                        <FiChevronDown className="hiddenChevron"size={60} color="#000" />
                    </div>}
                </div>
                ))}
            </div>
        </div>
    )
}