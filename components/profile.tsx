import React from "react";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { name } from "../lib/constants";

export default function Profile( { home }: { home?:boolean }): JSX.Element {
	return (
		<div className={home ? styles.leftContainerHome : styles.leftContainer}>

			<Image
				priority
				src="/images/profile.jpg"
				className={utilStyles.borderCircle}
				height={144}
				width={144}
				alt={name}
			/>
			<h1 className={utilStyles.headingXl}>{name}</h1>
		</div>
	)
}