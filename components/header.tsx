import React from "react";
import Image from "next/image";
import { name } from "../lib/constants";
import utilStyles from '../styles/utils.module.css'
import styles from "../styles/header.module.css";

// destinations
import About from "./home";
// import Contact from "../components/contact";
// import Portfolio from "../components/portfolio";


interface HeaderProps {
	destination: string;
}

export default function Header({ destination }: HeaderProps): JSX.Element {

	let Component;

	switch (destination) {
		case "about":
			Component = About;
			break;
		// case "contact":
		// 	Component = Contact;
		// 	break;
		// case "portfolio":
		// 	Component = Portfolio;
		// 	break;
		default:
			Component = About;
			break;
	}
	return (
		<header className={styles.header}>
			<Component />
		</header>
	)
}