import React, { useState } from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";
import styles from "../../styles/portfolio.module.css"
import PortfolioBox from "../../components/portfolioBox";

export default function Portfolio() {
	const [filter, setFilter] = useState("all");

	const filterSelection = (c: string): void => {
		setFilter(c);
	};

	return (
		<Layout>
			<Title>Portfolio</Title>
			<h1>Portfolio</h1>
			<div className={styles.portfolioDiv}>
				<h2>PORTFOLIO</h2>
			  <PortfolioBox />
			</div>
		</Layout>
	);
}
