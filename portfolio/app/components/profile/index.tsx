'use client'

import Image from "next/image";
import profilePic from "../../../public/images/profile.jpeg";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

type ProgrammingLanguage = {
	id: number;
	pgrm_lang_name: string;
	date_started: string;
};

export default function Profile() {

	const [languages, setLanguages] = useState<ProgrammingLanguage[]>([]);

	useEffect(() => {
		async function fetchLanuages() {
			const response = await fetch('/api/languages');
			const data: ProgrammingLanguage[] = await response.json();
		}
		fetchLanuages();
	}, []);

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
							{languages.map((language) => (
								<li key={language.id}>
									{language.pgrm_lang_name}
								</li>
							))}
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}
