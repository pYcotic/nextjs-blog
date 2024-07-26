import styles from "./page.module.css";
import Profile from "./components/profile";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.profile}>
				<Profile />
			</div>
			<div className={styles.examples}
				id="examples">
			</div>
			<div className={styles.projects}
				id="projects">
			</div>
			<div className={styles.hackathons}
				id="hackathons">
			</div>
			<div className={styles.contact}
				id="contact">
			</div>
		</main>
	);
}
