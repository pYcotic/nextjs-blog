import Image from "next/image";
import profilePic from "../../../public/images/profile.jpeg";
import styles from "./index.module.css";

export default function Profile() {
	return (
		<>
			<div className={styles.profile}>
				<div className={styles.title}>
					<h1>Portfolio of Marco J. Slabbert</h1>
				</div>
				<div className={styles.content}>
					<div className={styles.profilePic}>
						<Image
							src={profilePic}
							alt="Profile Picture"
							className={styles.profile_picture}
						/>
					</div>
					<div className={styles.profileInfo}>
						<p>What I am currently doing:</p>
						<ul>
							<li>
								<p>Student</p>
							</li>
							<p>I an enrolled at the University of London, I Am due to finish the degree in October 2025.</p>
							<li>
								<p>Software Developer</p>
							</li>
							<p>I am using the following technologies:</p>
							<p>Languages:</p>
							<ol>
								<li>C++</li>
							</ol>
							<p>Frameworks:</p>
							<ol>
								<li>Projucer</li>
							</ol>
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}
