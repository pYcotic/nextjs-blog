import React from "react";
import Link from "next/link";
import Logo from "./Logo";
// import Button from "./Button";
import styles from "./index.module.css";

const Navbar = () => {
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.container}>
					<div className={styles.flex_box}>
						<Logo />
						<ul className={styles.links}>
							<li>
								<Link href="/Hackathons">Hackathons</Link>
							</li>
							<li>
								<Link href="/Projects">Projects</Link>
							</li>
							<li>
								<Link href="/Examples">Examples</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
};

export default Navbar;
