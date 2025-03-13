import React from "react";

import INFO from "../../data/user";

import "./styles/allWorkExperiences.css";
import WorkExperience from "./workExperience";
import myWorkExperiences from "../../data/workExperiences";

const AllWorkExperiences = () => {
    return (
        <div className="all-work-experiences-container">
            {myWorkExperiences.map((project, index) => (
                <div className="all-work-experiences-experience" key={index}>
                    <WorkExperience
                        image={project().image}
                        image2={project().image2}
                        title={project().title}
                        organization={project().organization}
                        description={project().description}
                        linkText={"View project"}
                        link={"/workExperience/" + (index + 1)}
                        idNumber={(index + 1)}
                    />
                </div>
            ))}
        </div>
    );
};

export default AllWorkExperiences;
