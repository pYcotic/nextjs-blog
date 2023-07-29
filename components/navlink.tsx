import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";

interface NavLinkProps {
	  href: string;
	  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps): JSX.Element {
	return (
		<div className={styles.divWrapper}>
			<Link href={href} className={styles.textWrapper}>
				{children}
			</Link>
		</div>
		);
}