import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { GiLogicGateNor } from 'react-icons/gi';
import { FcMultipleSmartphones } from 'react-icons/fc';


function ServicesSection({image, title, text,skills }) {

    const icons = () => {
        if (title === "Website Design"){
            console.log('hi')
            return <CgWebsite size = {120}/>
        }
        else if (title === "Functional Programing"){
            return <GiLogicGateNor size = {120}/>
        }
        else if (title === "Mobile Responsiveness"){
            return <FcMultipleSmartphones size = {120}/>
        }
            
            
    }

    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <div style = {{textAlign: "center"}}>
                    {icons()}
                    </div>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
                <ul className="service-ul">{
                skills.map(skill => <li>{skill}</li>)
                }</ul>
            </div>
        </div>
    )
}

export default ServicesSection;
