import Layout from "../../components/layout";
import Title from "../../components/title";
import React from "react";
import Head from "next/head";
import { siteTitle } from "../../lib/constants";

export default function Contact() {
	return (
		<Layout>
			<Head><title>{siteTitle} - Contact</title></Head>
			<h1>Contact</h1>
		</Layout>
	);
}