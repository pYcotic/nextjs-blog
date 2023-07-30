import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { siteTitle } from "../../lib/constants";

import { getSortedPostsData } from '../../lib/posts'
import { GetStaticProps } from 'next'
import Link from "next/link";

interface PostProps {
	allTestimonialData: {
		date: string
		title: string
		id: string
	}[]
}
// export default function Posts() {
export default function Posts( { allTestimonialData }: PostProps) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} - Testimonials</title>
			</Head>
			<h1>Testimonials</h1>
			<ul>
				{allTestimonialData.map(({ id, date, title }) => (
					<li key={id}>
						<Link href={`/tetimonials/${id}`}>
							{title}
						</Link>
						<br />
						{id}
						<br />
						{date}
					</li>
				))}
			</ul>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allTestimonialData = getSortedPostsData()
	return {
		props: {
			allTestimonialData
		}
	}
}