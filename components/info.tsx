import React from "react";
import styles from "../styles/layout.module.css";

export default function Info({home} : {home?: boolean}): JSX.Element {
	return (
		<div className={home ? styles.rightContainerHome : styles.rightContainer}>
			<h1>Info</h1>
			<p>
				Hi, I'm Marco. I'm a full-stack developer and I love to build things.
				<br />
				<br />
				I'm currently working on a few projects, including a blog and a portfolio.
				<br />
				<br />
				You can find me on <a href="
					https://www.linkedin.com/in/marco-slabbert-1b1b0b1b4/
				">LinkedIn</a>
				
				<br />
				<br />
			</p>
		</div>
	);
}