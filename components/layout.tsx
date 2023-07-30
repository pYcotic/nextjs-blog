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
			<Profile home />
			<Center home >
				{children}
			</Center>
			<Info home />
		</div>
	) : (
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
	)
	)
}