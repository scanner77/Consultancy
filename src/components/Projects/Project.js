import React from 'react'
import './project-style.css'
const Project = (props) => {
    return (
        <div className="card text-center" shadow>
            <div className = "overflow">
                <img src = {props.imgsrc} alt = "laxman" className = "card-img-top"/>
            </div>
            <div className = "card-body text-dark">
                <h4 className = "card-title">{props.title}</h4>
                <p className = "card-text text-secondary">
                    {props.text}
                </p>
                <a href = {props.href} className = "btn btn-outline-success" >Source Code</a>
            </div>
        </div>
    )
}

export default Project
