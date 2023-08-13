import React from "react";
import styles from "../styles/portfolio.module.css";
import { getSortedPortfolioData } from "../lib/portfolio";
import { GetStaticProps } from 'next'



export default function PortfolioItem({
	portfolioData
}: {
	portfolioData: {
		title: string
		imagePath: string
		contentHtml: string
	}
})
{
	return (
		<div className={styles.portfolioColumn}>
			<div className={styles.portfolioContent}>
				<img src={portfolioData.imagePath} alt={portfolioData.title} />
				<h4>{portfolioData.title}</h4>
				<p>{portfolioData.contentHtml}</p>
			</div>
		</div>
	);
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const portfolioData = getSortedPortfolioData()
// 	return {
// 		props: {
// 			portfolioData
// 		}
// 	}
// }