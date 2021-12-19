import React from 'react'
import Project from './Project'
import laxman from '../../Image/PersonalWebsite.PNG'
import lucky from '../../Image/slushd.PNG'
import Spring from '../../Image/CRUDSPRING.PNG'

const ProjectGrid = () => {
    return (
        
            <div className = "container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Project 
                        imgsrc = {laxman} 
                        title = "React" 
                        text = "This is my personal website. This website is solely depended on ReactJs, Router, React-Bootstrap, Styled-Components"
                        href = "#"
                        />
                              
                    </div>
                    <div className="col-md-4">
                    <Project 
                    imgsrc = {lucky} 
                    title = "ReactJs"
                    text = "This is a single page React Resturant Application. I have added a OAuth with Google. I have added a Firebase Real Time Database."
                    href = "https://github.com/scanner77/Slush-D-Project"
                    />
                    </div>
                    <div className="col-md-4">
                    <Project 
                    imgsrc = {Spring} 
                    title = "Spring Boot/MVC"
                    text = "This is a Spring Boot Application. We can perform CRUD application using data JPA. This app gives you access to RESTful API as well as Web API"
                    href = "https://github.com/scanner77/RestControllerApi"
                    />
                    </div>
                </div>
            </div>
        
    )
}

export default ProjectGrid
