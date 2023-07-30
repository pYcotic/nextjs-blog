import React from "react";
import Title from "../../components/title";
import Layout from "../../components/layout";

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

export default function Posts( { allTestimonialData }: PostProps) {
	return (
		<Layout>
			<Title>Testimonials</Title>
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