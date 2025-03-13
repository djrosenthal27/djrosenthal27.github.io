import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/workExperience.css";

const WorkExperience = (props) => {
    const { image, image2, title, description, linkText, link, organization, idNumber } = props;

    const src = (image) =>  {return require("../common/images/" + image)}

    const truncate = (description) => {
        let split = description.split(". ")
        let text = ""

        for (let i = 0; i < split.length; i++) {
            if (text.length < 300) {
                text += split[i]
                if (split.length - 1 !== i) {
                    text += ". "
                }
            } else {
                return text
            }
        }
        return text


    }

    return (
        <React.Fragment>
            <div className="project">
                <Link to={link}>
                    <div className="project-container">
                        <div style={{justifyContent: "space-between", display: "inline-flex"}}>
                            <div className="project-info">
                                <div className="project-organization">{organization}</div>
                                <div className="project-title">{title}</div>
                                <div className="project-description">{truncate(description)}</div>
                            </div>
                            <div className="project-logo">
                                {image2 ?
                                    <div style={{display: "inline", whiteSpace: "nowrap"}}>
                                        <img src={src(image)} style={{width: "50%", aspectRatio: "1 / 1"}} alt="logo"/>
                                        <img src={src(image2)} style={{width: "50%", aspectRatio: "1 / 1"}} alt="logo"/>
                                    </div> :
                                    image ? <img src={src(image)} style={{width: "100%"}} alt="logo"/> : ''}
                            </div>
                        </div>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink}/>
                            </div>
                            <div className="project-link-text">{linkText}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default WorkExperience;
