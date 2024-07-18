import Image from "next/image";
import profilePic from "../../../public/images/profile.jpeg";

export default function Profile() {
	return (
		<>
			<h1>Portfolio of Marco J. SLabbert</h1>
			<Image
				src={profilePic}
				alt="Profile Picture"
				sizes="20vw"
				className={styles.profile}
			/>
			<br />
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
		</>
	)
}
