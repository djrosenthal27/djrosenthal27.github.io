import React from "react";

const src = (image) =>  {return require("../components/common/images/" + image)}

function work_1() {
    return {
        image: "pattern_library/pl_homepage.png",
        date: "July 2024 - December 2024",
        organization: "Northeastern University - Pattern Library",
        title: "Programming/Web Developer Co-op",
        description:
            "For my first full-time co-op experience, I worked as a full-stack developer on the Pattern Library for Professor Christopher Barney’s Pattern Language for Game Design website. This website, used in several Game Design courses at Northeastern University, contains a library of patterns, each describing a repeatable solution to problems that game designers may encounter during development. To accompany the upcoming second edition of the site’s companion textbook, I added new features to the website that made pattern creation more robust, increased the navigability of the library and the supplemental game reference, and improved the usability and security of the website. I gained experience designing and implementing components using PHP, MySQL, JavaScript, and React, and I got practice working with a fellow programmer to build on an existing repository and add features to a live website.",
        keywords: [
        ],
        style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <img
                        src={src("pattern_library/pl_homepage.png")}
                        style={{width: 700, minWidth: "80%", height: "auto", margin: 2}}
                    />
                    <div className="paragraph">
                        <br/><br/>
                        For my first full-time co-op
                        experience, I worked as a full-stack developer on the Pattern Library for Professor Christopher
                        Barney’s <i><a href={"https://patternlanguageforgamedesign.com/"}>Pattern Language for
                        Game Design</a></i> website. This website, used in several Game Design
                        courses at Northeastern University, contains a library of patterns, each describing a repeatable
                        solution to problems that game designers may encounter during development. To accompany the
                        upcoming second edition of the site’s companion textbook, I added new features to the website
                        that made pattern creation more robust, increased the navigability of the library and the
                        supplemental game reference, and improved the usability and security of the website. I gained
                        experience designing and implementing components using PHP, MySQL, JavaScript, and React, and
                        I got practice working with a fellow programmer to build on an existing repository and add
                        features to a live website. My contributions to the website include the
                        following (full-stack unless otherwise noted):
                        <ul>
                            <li>Writing the back-end code for secondary example games and suggested examples</li>
                            <li>Comments under patterns, including a comment box with bi-directional loading and auto-scroll</li>
                            <li>Notifications for suggestions, comments, ratings, and hidden content</li>
                            <li>Multiple design problems and linking design problems to example games</li>
                            <li>“Implemented Patterns” section for games</li>
                            <li>Storing browser history when moving from page to page</li>
                            <li>Interface for setting user permissions</li>
                            <li>Panel for searching by user or group</li>
                            <li>Pattern and Game Search updates, include Search by Release Date for games</li>
                            <li>Edit history persistence and browsing for example games, pattern descriptions, and design problems</li>
                            <li>Popup warnings for invalid content submission</li>
                            <li>Visibility checks for patterns</li>
                            <li>Hiding patterns, example games, and comments that aren’t visible to users</li>
                            <li>Adding constraints to patterns and letting users create new constraints</li>
                            <li>Various bug fixes, style tweaks, and query optimizations throughout the website</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        ),
    };
}

const myWorkExperiences = [work_1];

export default myWorkExperiences;
