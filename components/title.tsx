import React from "react";
import Head from "next/head";
import { siteTitle } from '../lib/constants';



export default function Title({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<Head>
			<title>{siteTitle} - {children}</title>
		</Head>
	);
}