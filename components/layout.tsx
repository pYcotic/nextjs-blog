import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navbar from './navbar'
import { siteTitle } from '../lib/constants'
import Profile from './profile'
import Info from './info'
import Center from './center'

export const name = ' Marco J. Slabbert'
export default function Layout({
	children,
	home
}: {
	children: React.ReactNode,
	home?: boolean
}) {
	return (home ? (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="301" viewBox="0 0 1440 301" fill="none" className={styles.shape1}>
					<path d="M0 -91.5H1439.66V269L1118.85 11.5L936 59.5L0 301V-91.5Z" fill="#B99470" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="353" viewBox="0 0 1440 353" fill="none" className={styles.shape2}>
				<path d="M0 353H1439L1505.39 223.5L1262.84 135L423.5 293L258.5 230L0 0V353Z" fill="#fefae0" />
			</svg>
			<div className={styles.container}>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="The personal blog and portfolio of Marco J. Slabbert"
					/>
					<meta name="og:title" content={siteTitle} />
				</Head>
				{/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="301" viewBox="0 0 1440 301" fill="none" className={styles.shape1}>
					<path d="M0 -91.5H1439.66V269L1118.85 11.5L936 59.5L0 301V-91.5Z" fill="#B99470" />
				</svg> */}
				<Navbar />
				<Profile home />
				<Center home >
					{children}
				</Center>
				<Info home />
			</div>
		</>
	) : (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="288" viewBox="0 0 1440 288" fill="none" className={styles.shape3}>
				<path d="M1480 269C1480 376.972 1407 -33.4998 1112 156.5C805 276 634.5 -18.5 -111.5 205.5C-238 -140.5 462.591 -89.5 900 -89.5C2059.5 -55 1480 161.028 1480 269Z" fill="#FEFAE0" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="285" viewBox="0 0 1440 285" fill="none" className={styles.shape4}>
				<path d="M1628.5 388C1628.5 495.971 522.5 225 227.5 415C-79.5 534.5 -181.5 354.5 110.5 88.5C247 -84.5 1343.5 320 1343.5 117.5C1373 -223.5 1628.5 280.028 1628.5 388Z" fill="#B99470" />
			</svg>
			<div className={styles.container}>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="description"
						content="The personal blog and portfolio of Marco J. Slabbert"
					/>
					<meta name="og:title" content={siteTitle} />
				</Head>
				<Navbar />
				<Profile />
				<Center>
					{children}
				</Center>
				<Info />
			</div>
		</>
	)
	)
}