import React from "react";
import styles from "../styles/portfolio.module.css";
import PortfolioItem from "./portfolioItem";


export default function PortfolioBox() {
	return (
		<div className={styles.portfolioRow}>
			<PortfolioItem />
		</div>
	);
}