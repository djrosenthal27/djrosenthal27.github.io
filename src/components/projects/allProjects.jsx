import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import myArticles from "../../data/articles";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{myArticles.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						image={project().image}
						image2={project().image2}
						title={project().title}
						description={project().description}
						linkText={"View project"}
						link={"/article/" + (index + 1)}
						idNumber={(index + 1)}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
