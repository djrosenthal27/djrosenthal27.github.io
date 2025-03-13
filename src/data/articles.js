import React from "react";

const src = (image) =>  {return require("../components/common/images/" + image)}

function article_1() {
	return {
		image: "cmyklash_title.png",
		date: "July 2023 - March 2024",
		title: "CMYKlash",
		description:
			"CMYKlash is a color-based bullet hell game where the player controls a triangle with three vertices and a " +
			"cyan, magenta, and yellow side. To rack up points, the player must defeat enemies by colliding with them " +
			"such that the enemy’s color and the color of the side of the triangle they collide with match. When the " +
			"colors don’t match, the player takes damage and loses a vertex, turning the player into a line, followed by a dot.",
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
						src={src("cmyklash_title.png")}
						style={{width: 500, minWidth: "80%", height: "auto", margin: 2}}
					/>
					<img
						src={src("cmyklash_anim.gif")}
						style={{width: 500, minWidth: "80%", height: "auto", margin: 2}}
					/>
					<div className="paragraph">
						<br/><br/>
						<i><a href={"https://sirdj27.itch.io/cmyklash"}>CMYKlash</a></i> is a color-based bullet hell game
						where the player controls a triangle with three
						vertices and a cyan, magenta, and yellow side. To rack up points, the player must defeat
						enemies by colliding with them such that the enemy’s color and the color of the side of the
						triangle
						they collide with match. When the colors don’t match, the player takes damage and loses a
						vertex,
						turning the player into a line, followed by a dot.
						<ul>
							<li>Created for the 72-hour <i>IcoJam 2023</i> with a team of high school friends</li>
							<li>Based on the jam’s theme of "3... 2.. 1."</li>
							<li>Created with Unity 2D and C# scripting</li>
							<li>Features fast-paced and intuitive gameplay, unique power-ups, and difficulty options
							</li>
							<li>Uses a mix of vibrant 2D and 3D art assets, as well as driving background music</li>
							<li>Placed in the top 25% overall for the Jam</li>
						</ul>
						<h4>My Contributions:</h4>
						<ul>
							<li>Assembled team and led development</li>
							<li>Programmed the player mechanics and health system, power-ups, UI, and some of the enemy
								behavior
							</li>
							<li>Implemented and edited levels and assets in Unity, along with the main menu</li>
							<li>Composed background music</li>
							<li>Contributed to design and documentation</li>
							<li>Recently reorganized codebase and made bug fixes for a version 1.1 update</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		image: "ebg_2.gif",
		image2: "ebg_3.gif",
		date: "July 2023 - Present",
		title: "Earthbound Background Generator",
		description:
			"Earthbound Background Generator is an in-progress solo project that allows users to " +
			"create their own custom background animations as inspired by those seen in Earthbound. " +
			"Created in IntelliJ using Java and the JavaFX GUI library, the easy-to-use program allows " +
			"users to import their own designs and export them to perfectly-looping 256x256 pixel " +
			"animations.",
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
						src={src("ebg_editor.png")}
						style={{width: 800, minWidth: "80%", height: "auto", margin: 2}}
					/>
					<div style={{display: "inline-flex", justifyContent: "space-between"}}>
						<img
							src={src("ebg_1.gif")}
							style={{width: 190,  height: "auto", margin: 5}}
						/>
						<img
							src={src("ebg_2.gif")}
							style={{width: 190, height: "auto", margin: 5}}
						/>
						<img
							src={src("ebg_3.gif")}
							style={{width: 190,  height: "auto", margin: 5}}
						/>
						<img
							src={src("ebg_4.gif")}
							style={{width: 190,  height: "auto", margin: 5}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><a href={"https://app.screencastify.com/v3/watch/L2CmDSaMAw2YRDshmZ5w"}>Earthbound Background
							Generator</a></i> is an
						in-progress solo project that allows users to create their own custom background animations
						as inspired by those seen in <i>Earthbound</i>. Created in IntelliJ using Java and the JavaFX GUI
						library, the easy-to-use program allows users to import their own designs and export them to
						perfectly-looping 256x256 pixel animations.

						<h4>Features:</h4>
						<ul>
							<li>Allows users to import images from their file system</li>
							<li>Supports three different kinds of waves: horizontal, vertical, and interleaved</li>
							<li>Lets users determine wave amplitude and period/frequency, as well as vertical and horizontal
							scroll speeds</li>
							<li>Gives the option to overlay two different animations</li>
							<li>Uses both sliders and text inputs for determining parameter values</li>
							<li>Automatically calculates the number of frames necessary for a perfect loop of the animation</li>
							<li>Allows users to download animations as a GIF or sprite-sheet for use in a game engine</li>
							<li>Provides options to skip some frames to minimize export time and space</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		image: "inf_inc_gameplay.gif",
		date: "February 2024 - April 2024",
		title: "Infiltration Inc.",
		description:
			"Infiltration Inc. is a tactical first person shooter and stealth game. You play as Valentina Dawson, " +
			"an employee of a tech company that created a device that allows its user to phase through walls. " +
			"To raise funds for the company, she must infiltrate heavily-guarded banks, using her wall-phasing " +
			"ability to her advantage by taking unconventional routes to avoid being spotted by enemies.",
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
						src={src("inf_inc_gameplay.gif")}
						style={{width: 600, minWidth: "80%", height: "auto", margin: 2}}
					/>
					<div style={{display: "inline-flex", justifyContent: "space-between"}}>
						<img
							src={src("inf_inc_showroom.png")}
							style={{width: 400,  height: "auto", margin: 5}}
						/>
						<img
							src={src("inf_inc_entrance.png")}
							style={{width: 400, height: "auto", margin: 5}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><a href={"https://play.unity.com/en/games/18740ca2-1fac-4968-82e7-e75d2f5a0941/fp5-infiltration-inc"}>Infiltration
							Inc.</a></i> is a tactical first person shooter and stealth game. You play as Valentina Dawson, an employee of
						a tech company that created a device that allows its user to phase through walls. To raise funds
						for the company, she must infiltrate heavily-guarded banks, using her wall-phasing ability to
						her
						advantage by taking unconventional routes to avoid being spotted by enemies.
						<ul>
							<li>Developed as the final project for <i>Game Programming</i> course</li>
							<li>Created with a group of peers in Unity3D, applying skills we’ve learned during the
								course
							</li>
							<li>Incorporates navigation-based puzzle elements with action mechanics to create an
								exciting and strategic experience
							</li>
						</ul>
						<h4>My Contributions:</h4>
						<ul>
							<li>Helped with game concept ideation, including coming up with the wall-phasing mechanic</li>
							<li>Programmed the seamless wall-phasing mechanic and implemented it into all levels</li>
							<li>Animated and implemented the reticle transition between shooting-mode and phasing-mode</li>
							<li>Used my <i>Earthbound Background Generator</i> to create the warp point animation</li>
							<li>Imported rigged animations and applied them to enemy models, using a finite-state machine
							(FSM) to determine animation states</li>
							<li>Implemented field-of-view and reactivity to player gunfire into enemy behavior script</li>
							<li>Added decorations and NPCs to levels, as well as greyboxed the final level’s layout</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		image: "ds_transition.gif",
		date: "March 2023 - April 2023",
		title: "Driftscape",
		description:
			"Driftscape is a narrative-based game about Alex, an office worker who becomes disillusioned and bored " +
			"with their day-to-day life, despite their co-workers seemingly having fulfilling and purposeful lives. " +
			"The player sees a glimpse of Alex’s monotonous workday and follows them through their surreal search for " +
			"meaning in the monotony.",
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
					<div style={{display: "inline-flex"}}>
						<img
							src={src("ds_office_1.png")}
							style={{width: 400, height: "auto", margin: 5}}
						/>
						<img
							src={src("ds_office_2.png")}
							style={{width: 400, height: "auto", margin: 5}}
						/>
					</div>
					<img
						src={src("ds_transition.gif")}
						style={{width: 300, height: "auto", position: "absolute", top: 480}}
					/>
					<div style={{verticalAlign: "bottom", display: "inline", whiteSpace: "nowrap"}}>
						<img
							src={src("ds_plants.png")}
							style={{width: 250, height: 250, margin: 5}}
						/>
						<img
							src={src("ds_phone.png")}
							style={{width: 300, height: "auto", margin: 5}}
						/>
						<img
							src={src("ds_rocket.png")}
							style={{width: 250, height: 250, margin: 5}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><a href={"https://game3400spring2023team2.itch.io/driftscape"}>Driftscape</a></i> Driftscape is a
						narrative-based game about Alex, an office worker who becomes disillusioned and bored with
						their day-to-day life, despite their co-workers seemingly having fulfilling and purposeful
						lives. The player sees a glimpse of Alex’s monotonous workday and follows them through their
						surreal search for meaning in the monotony.
						<ul>
							<li>Created as a final project for <i>Level Design and Game Architecture</i> course</li>
							<li>Made with a team of peers using Unity3D and ProBuilder</li>
							<li>Uses the layout, design, and aesthetic appearance of the surrounding environment as the
								primary way of conveying narrative
							</li>
							<li>Playable on Windows, macOS, and Linux, as well as in a browser</li>
						</ul>
						<h4>My Contributions:</h4>
						<ul>
							<li>Assisted with the overall design and planning</li>
							<li>Greyboxed the office scene using ProBuilder</li>
							<li>Created low-poly 3D assets with ProBuilder to decorate the scene, as well as pixelated
								2D assets
							</li>
							<li>Optimized the office scene to minimize the amount of time it takes to transition from
								the surreal scene back to the office scene
							</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		image: "quack_home.png",
		date: "March 2024",
		title: "Quack",
		description:
			"Quack is a short visual novel about a duck who must perform odd jobs to provide bread for his family." +
			" Each job requires playing a unique minigame to determine how much bread is earned, as well as " +
			"communicating with other ducks to determine the minigames’ difficulty.",
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
					<div style={{display: "inline-flex", marginBottom: 50}}>
						<img
							src={src("quack_baking.png")}
							style={{width: 400, height: "auto", margin: 10}}
						/>
						<img
							src={src("quack_spa.png")}
							style={{width: 400, height: "auto", margin: 10}}
						/>
					</div>
					<img
						src={src("quack_map.png")}
						style={{width: 350, height: "auto", position: "absolute", top: 550}}
					/>
					<div style={{display: "inline-flex", marginTop: 50}}>
						<img
							src={src("quack_baker.png")}
							style={{width: 400, height: "auto", margin: 10}}
						/>
						<img
							src={src("quack_home.png")}
							style={{width: 400, height: "auto", margin: 10}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><a href={"https://sirdj27.itch.io/quack"}>Quack</a></i> is a short visual novel about a duck who
						must perform odd jobs to provide bread for his family. Each job requires playing a unique
						minigame to determine how much bread is earned, as well as communicating with other ducks to
						determine the minigames’ difficulty.
						<ul>
							<li>Created in 48 hours for <i>Slice of Jam 2024</i>, hosted by the NU Game Development Club</li>
							<li>Inspired by the theme of "breadWINNER"</li>
							<li>Created alongside a small team including an artist and composer</li>
							<li>Despite limiting the dialogue to only using the word "quack," tone is conveyed during
								NPC interaction through the player’s choice of fonts when replying to NPCs
							</li>
							<li>With three different endings, the game is a light-hearted and replayable experience with
								soothing visuals and music
							</li>
							<li>Playable in browser, with an updated version planned to release soon</li>
						</ul>
						<h4>My Contributions:</h4>
						<ul>
							<li>Sole Unity developer and programming, assembling audio and art assets in the scene</li>
							<li>Programmed a custom dialogue system from scratch, supporting changes in fonts,
								character images, box appearance, and icons
							</li>
							<li>Developed three unique minigames: an obstacle-avoidance spa game, a time-management
								breadmaking game, and a rock-concert rhythm game
							</li>
							<li>Implemented scene transitions through level manager scripts</li>
							<li>Searched for and implemented fonts for player dialogue choices</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_6() {
	return {
		image: "bowling_strike.gif",
		date: "February 2024",
		title: "Alley Apocalypse",
		description:
			"Alley Apocalypse is a first-person shooter where the player is a bowler who must defend themself from" +
			" vengeful, sentient bowling pins.",
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
						src={src("bowling_strike.gif")}
						style={{width: 600, height: "auto", margin: 2}}
					/>
					<div style={{display: "inline-flex"}}>
						<img
							src={src("bowling_image.png")}
							style={{width: 450, height: "auto", margin: 2}}
						/>
						<img
							src={src("bowling_swarm.gif")}
							style={{width: 450, height: "auto", margin: 2}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><a href={"https://play.unity.com/en/games/815e7e10-cb76-4b79-8d58-85358e96ba37/alley-apocalypse"}>Alley Apocalypse</a></i> is a first-person shooter
						where the player is a bowler who must defend themself from vengeful, sentient bowling pins.
						<ul>
							<li>Created as a solo Microgame Coding Assignment for <i>Game Programming</i> course</li>
							<li>Made with Unity3D with gameplay based on mechanics taught during several preceding weeks of lectures</li>
						</ul>
						<h4>Features:</h4>
						<ul>
							<li>Uses a basic first-person control system and a physics-based bowling ball projectile mechanic</li>
							<li>Set in three unique levels created with ProBuilder</li>
							<li>Contains enemies that follow the player and deal damage on collision, as well as randomized enemy spawners</li>
							<li>Pin death animation created with Unity’s particle system</li>
							<li>Interactable crates that can be moved by enemies, as well as by the player’s projectiles</li>
							<li>Implements sound effects and text-based UI features to convey information to the player</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_7() {
	return {
		image: "wrom_drain.gif",
		image2: "wrom_virus_blink.gif",
		date: "September 2023 - December 2023",
		title: "What Remains of Me",
		description:
			"What Remains of Me is an in-development, class-wide game built across multiple semesters in the " +
			"Game Studio course at Northeastern University. It is a puzzle-platformer about a robot named " +
			"Atlas who wakes up in a desolate underwater lab, uncovering the mysteries surrounding the conflict " +
			"between robots and humans as he attempts to reach the surface.",
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
					<div style={{display: "inline-flex", alignItems: "center"}}>
						<img
							src={src("wrom_drain.gif")}
							style={{width: 300, height: "auto", margin: 5}}
						/>
						<img
							src={src("wrom_level.png")}
							style={{width: 600, height: "auto", margin: 5}}
						/>
					</div>
					<div style={{display: "inline-flex"}}>
						<img
							src={src("wrom_virus_1.png")}
							style={{width: 200, height: 200, margin: 5}}
						/>
						<img
							src={src("wrom_virus_2.png")}
							style={{width: 200, height: 200, margin: 5}}
						/>
						<img
							src={src("wrom_virus_3.png")}
							style={{width: 200, height: 200, margin: 5}}
						/>
						<img
							src={src("wrom_virus_blink.gif")}
							style={{width: 200, height: 200, margin: 5}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><b>What Remains of Me</b></i> is an in-development, class-wide game built across multiple
							semesters
							in the Game Studio course at Northeastern University. It is a puzzle-platformer about a
							robot
							named Atlas who wakes up in a desolate underwater lab, uncovering the mysteries surrounding
							the
							conflict between robots and humans as he attempts to reach the surface.
							<ul>
								<li>Made in Unity 2D by students across a span of several semesters</li>
								<li>Developed in an environment simulating a game studio, using Agile development, Jira
									tasks,
									and multiple level- and discipline-based teams
								</li>
								<li>Uses GitHub as a version control system to accommodate roughly 50 students
									developing the
									game simultaneously
								</li>
							</ul>
							<h4>My Contributions:</h4>
							<ul>
								<li>Fixed game-wide bugs, including an issue with moving platforms and an issue
									involving an
									accidental Git merge
								</li>
								<li>Created and approved programming-related tasks as a part of the programming team
								</li>
								<li>Decorated the scene assigned to my group with narrative background elements</li>
								<li>Implemented dialogue interactions using the Ink dialogue system within my group’s
									level
								</li>
								<li>Assisted with documentation of all scripts for future developers to reference</li>
								<li>Designed and implemented UI warnings for low-player health and high-virus levels
								</li>
							</ul>
						</div>
					</div>
			</React.Fragment>
		),
	};
}

function article_8() {
	return {
		image: "dea_style.png",
		date: "June 2023",
		title: "D.E.A. Journal",
		description:
			"D.E.A. Journal is a bullet journal application that allows users to plan out a "
			+ "week at a time by assigning themselves tasks and events for the week.",
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
						src={src("dea_image.png")}
						style={{width: 800, height: "auto", margin: 5, marginBottom: 100}}
					/>
					<div style={{position: "absolute", top: 550, justifyContent: "space-between", display: "inline", whiteSpace: "nowrap"}}>
						<img
							src={src("dea_style.png")}
							style={{width: 400, height: "auto", marginRight: 220}}
						/>
						<img
							src={src("dea_splash.png")}
							style={{width: 250, height: "auto", marginLeft: 220}}
						/>
					</div>

					<div className="paragraph">
						<br/><br/>
						<i><b>D.E.A. Journal</b></i> is a bullet journal application that allows users to plan out a
						week at a time by assigning themselves tasks and events for the week.
						<ul>
							<li>Created with a small team of peers as an <i>Object-Oriented Design</i> final project</li>
							<li>Developed in IntelliJ using Java, the JavaFX GUI library, and JSON for data
								persistence
							</li>
							<li>Codebase was designed to follow SOLID principles, Model-View-Controller separation, and
								abstraction and inheritance when applicable
							</li>
							<li>We were given the opportunity to choose between features to implement, resulting in a
								truly personalized and useful application
							</li>
						</ul>
						<h4>Features:</h4>
						<ul>
							<li>Users can create, save, and open journals, each one displaying a week's worth of info
							</li>
							<li>Enables task and event creation, including information for its name, description, time,
								and category, plus whether a task is completed or not
							</li>
							<li>Lets users set a maximum task/event limit and warns users when they go over their
								limit
							</li>
							<li>Gives users the option between three different color/font themes, as well as for users
								to create their own custom themes
							</li>
							<li>Gives users the ability to filter tasks and events by category</li>
							<li>Provides a space for users to add quotes and notes</li>
							<li>Lets users choose whether Monday or Sunday should be the first day of the week</li>
							<li>For extra credit, created a splash screen and a password entry field, as well as an
								unchangeable template journal to use for creating new weeks
							</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_9() {
	return {
		image: "froggen_bonk.gif",
		date: "March 2023 - April 2023",
		title: "Froggen",
		description:
			"Froggen is a comedic precision-platformer starring Froggen, a frog on a journey to rescue his kidnapped " +
			"son. Using lily pads to gain additional jumps midair, Froggen must traverse dangerous and unexpected " +
			"obstacles to reach the top of a mountain, where his son was brought by an evil bird.",
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
					<div style={{display: "inline-flex"}}>
						<img
							src={src("froggen_rain.gif")}
							style={{width: 400, height: "auto", margin: 10}}
						/>
						<img
							src={src("froggen_bonk.gif")}
							style={{width: 400, height: "auto", margin: 10}}
						/>
					</div>
					<div style={{display: "inline-flex"}}>
						<img
							src={src("froggen_end.png")}
							style={{width: 500, height: "auto", margin: 10}}
						/>
						<img
							src={src("froggen_saw.gif")}
							style={{width: 300, height: "auto", margin: 10}}
						/>
					</div>


					<div className="paragraph">
						<br/><br/>
						<i><a
							href={"https://sirdj27.itch.io/froggen-the-froggening"}>Froggen</a></i> is a comedic
						precision-platformer starring Froggen, a frog on a journey to rescue his kidnapped son.
						Using lily pads to gain additional jumps midair, Froggen must traverse dangerous and unexpected
						obstacles to reach the top of a mountain, where his son was brought by an evil bird.
						<ul>
							<li>Created with a team of peers as a final project for <i>Foundations of Game Design</i> course
							</li>
							<li>Built in Unity 2D and playable in a browser through WebGL</li>
							<li>Resulted in a tough-as-nails platforming experience that entertains the player with its
								over-the-top cutscenes and goofy obstacles
							</li>
						</ul>
						<h4>My Contributions:</h4>
						<ul>
							<li>Suggested the comedic theming of our game to differentiate it from other platformers</li>
							<li>Digitally sketched and devised a majority of the level elements</li>
							<li>Implemented level design elements into Unity to create the level layout</li>
							<li>Programmed the double-jump lily pad objects, as well as the anvil and wrench obstacles</li>
							<li>Fixed bugs and made changes so the game could be built with WebGL</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_10() {
	return {
		image: "pp_sketch.png",
		date: "February 2024 - April 2024",
		title: "Pulley Pong",
		description:
			"Pulley Pong is a skill-based game where pairs of players must score points by " +
			"bouncing a ping-pong ball toward a tower-like target structure. While one teammate bounces the " +
			"ball, the other uses a pulley system to raise or lower a basket in the target structure with " +
			"the goal of having the ball land in the basket. Depending on the height of the basket, landing " +
			"the ball in the basket earns the team a point or a power-up card, which can either be used to " +
			"give the team a boost or disadvantage their opponents.",
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
					<div style={{display: "inline-flex"}}>
						<img
							src={src("pp_tower.jpg")}
							style={{width: "auto", height: 500, margin: 10}}
						/>
						<img
							src={src("pp_sketch.png")}
							style={{width: "auto", height: 500, margin: 10}}
						/>
					</div>
					<div className="paragraph">
						<br/><br/>
						<i><b>Pulley Pong</b></i> is a skill-based game where pairs of players must score points by
						bouncing a ping-pong ball toward a tower-like target structure. While one teammate bounces the
						ball, the other uses a pulley system to raise or lower a basket in the target structure with
						the goal of having the ball land in the basket. Depending on the height of the basket, landing
						the ball in the basket earns the team a point or a power-up card, which can either be used to
						give the team a boost or disadvantage their opponents.
						<ul>
							<li>Developed as a solo final project for <i>Rapid Idea Prototyping for Games</i> course</li>
							<li>Gone through several iterations with various target structures, starting as a cardboard box, followed by a static foam-board tower structure, and now a disassemblable foam-board structure with a pulley system</li>
							<li>Final iteration is can quickly be assembled and disassembled, making it easy to transport while remaining sturdy during gameplay</li>
							<li>Relies on the players’ skill and their ability to cooperate with teammates, but uses power-up cards as a way to make gameplay more fair for less-skilled players</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_11() {
	return {
		image: "mit_rules.png",
		date: "February 2023",
		title: "MIT: Massive Invertebrate Tech",
		description:
			"MIT: Massive Invertebrate Tech is a comedic tabletop micro-RPG set in a world where all " +
			"vertebrates are extinct, resulting in invertebrates growing incredibly large and " +
			"intelligent. In a story facilitated by the designated Gamemaster, players act as a group " +
			"of invertebrate friends with their own unique abilities as they try to pull off a prank " +
			"at their university before graduation.",
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
						src={src("mit_rules.png")}
						style={{width: 900, height: "auto", margin: 10}}
					/>
					<div className="paragraph">
						<br/><br/>
						<i><b>MIT: Massive Invertebrate Tech</b></i> is a comedic tabletop micro-RPG set in a world
						where all vertebrates are extinct, resulting in invertebrates growing incredibly large and
						intelligent. In a story facilitated by the designated Gamemaster, players act as a group of
						invertebrate friends with their own unique abilities as they try to pull off a prank at their
						university before graduation.
						<ul>
							<li>Created with a team of peers for <i>Foundations of Game Design</i> course</li>
							<li>Designed so that it could be played with minimal materials</li>
							<li>Uses a game of Rock, Paper, Scissors (or as called in the game, Rock, Paper, Pincers) between a player and the GM as an action resolution method</li>
							<li>Open-ended concept, simple premise, and large variety of invertebrates to choose from enable endless hilarious story opportunities</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_12() {
	return {
		image: "cc_gameplay.png",
		date: "November 2022 - December 2022",
		title: "CardCrunch!",
		description:
			"CardCrunch! is an asymmetrical competitive card game where three \"developer\" players must fulfill a hand " +
			"of cards assigned to them by \"Task!\" cards during a series of 15-second turns. Meanwhile, a \"manager\" " +
			"player must complete a more difficult hand assigned to them by a \"Crunch!\" card during the same turns. " +
			"Successful completion of a \"Crunch!\" card gives developers a disadvantage during their next turn. The " +
			"developers win if they all complete their tasks during one of the turns, but the manager wins if they " +
			"fail to complete all their tasks during any turns.",
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
					<div style={{display: "inline-flex"}}>
						<img
							src={src("cc_gameplay.png")}
							style={{width: 500, height: "auto", margin: 10}}
						/>
						<img
							src={src("cc_crunchcards.png")}
							style={{width: 300, height: "auto", margin: 10}}
						/>
					</div>
					<div style={{display: "inline-flex"}}>
						<img
							src={src("cc_materials.png")}
							style={{width: 500, height: "auto", margin: 10}}
						/>
						<img
							src={src("cc_taskcards.png")}
							style={{width: 300, height: "auto", margin: 10}}
						/>
					</div>
					<div className="paragraph">
						<br/><br/>
						CardCrunch! is an asymmetrical competitive card game where three "developer" players must
						fulfill a hand of cards assigned to them by "Task!" cards during a series of 15-second turns,
						while a "manager" player must complete a more difficult hand assigned to them by a "Crunch!"
						card during the same turns. Successful completion of a “Crunch!” card gives developers a
						disadvantage during their next turn. The developers win if they all complete their tasks
						during one of the turns, but the manager wins if they fail to complete all their tasks during
						any turns.
						<ul>
							<li>Developed with a group of peers as a final project for Games and Society course</li>
							<li>Designed to be a fast-paced, competitive experience where developer players must work together to defeat the manager, who is trying to weaken their efforts</li>
							<li>Although over-exaggerated, the game is meant to be a critique of practices used by game studios that create crunch culture, resulting in developers being overworked</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4, article_5, article_6,
												article_7, article_8, article_9, article_10, article_11, article_12];

export default myArticles;
