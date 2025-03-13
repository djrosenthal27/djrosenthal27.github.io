import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";
import myWorkExperiences from "../data/workExperiences";

let ArticleStyle = styled.div``;

const ReadWorkExperience = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const workExperience = myWorkExperiences[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [workExperience]);

	ArticleStyle = styled.div`
		${workExperience().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${workExperience().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={workExperience().description} />
				<meta name="keywords" content={workExperience().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				{/*<NavBar />*/}

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-work-experience-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{workExperience().date}
								</div>
							</div>

							<div className="title read-article-title" style={{paddingBottom: 0}}>
								{workExperience().organization}
							</div>
							<div className="subheader read-article-title" style={{paddingTop: 10}}>
								{workExperience().title}
							</div>

							<div className="read-article-body">
								<ArticleStyle>{workExperience().body}</ArticleStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadWorkExperience;
