import React from "react";
import Image from "next/image";
import styles from "./profile.module.css";
import utilStyles from "../styles/utils.module.css";
import { name } from "../lib/constants";

interface NavLinkProps {
	  href: string;
	  children: React.ReactNode;
}

export default function Profile({ href, children }: NavLinkProps): JSX.Element {
	return (
		<div className={styles.imageWrpper}>
			<Image
				priority
				src="/images/profile.jpg"
				className={utilStyles.borderCircle}
				height={144}
				width={144}
				alt={name}
			/>
			<h1 className={utilStyles.heading2Xl}>{name}</h1>
		</div>
	)
}