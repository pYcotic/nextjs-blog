import React, { useState } from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";
import styles from "../../styles/portfolio.module.css"
import { getPortfolioList } from "../../lib/portfolio";

interface PortfolioProps {
	portfolioList: { id: string; title: string}[];
}

export default function Portfolio({ portfolioList }: PortfolioProps) {
	return (
		<Layout>
			<Title>Portfolio</Title>
			<h1>Portfolio</h1>
			<div className={styles.portfolioDiv}>
				<h2>PORTFOLIO</h2>
				{portfolioList.map((portfolio) => (
					<p key={portfolio.id}>{portfolio.title}</p>
				))}
			  {/* <PortfolioBox /> */}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const portfolioList = getPortfolioList();
	return {
		props: {
			portfolioList,
		},
	};
}