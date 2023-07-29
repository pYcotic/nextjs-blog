import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Link from 'next/link'
import Navbar from './navbar'
import { siteTitle } from '../lib/constants'
import Header from './header'

export const name = ' Marco J. Slabbert'
export default function Layout({
	children,
	destination,
	home
}: {
	children: React.ReactNode,
	destination?: string,
	home?: boolean
}) {
	return (
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
			{children}
		</div>
	)
}