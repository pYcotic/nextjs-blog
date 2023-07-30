import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";

interface NavLinkProps {
	  href: string;
	  children: React.ReactNode;
	  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps): JSX.Element {
	return (
		<div className={styles.divWrapper}>
			<Link onClick={onClick} href={href} className={`${styles.textWrapper} ${styles.offset}`}>
				{children}
			</Link>
		</div>
		);
}