import React from "react";
import Title from "../../components/title";
import Layout from "../../components/layout";

import { getSortedPostsData } from '../../lib/posts'
import { GetStaticProps } from 'next'
import Link from "next/link";

export default function Posts({
	allPostsData
}: {
	allPostsData: {
		date: string
		title: string
		id: string
	}[]
}) {
	return (
		<Layout>
			<Title>
				Posts
			</Title>
			<h1>Posts</h1>
			<ul>
				{allPostsData.map(({ id, date, title }) => (
					<li key={id}>
						<Link href={`/posts/${id}`}>
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
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}


// import Title from "../../components/title";
// import Layout from "../../components/layout";

// export default function Posts() {
// 	return (
// 		<Layout destination="Post">
// 			<Title>
// 				Posts
// 			</Title>
// 			<h1>Posts</h1>
// 		</Layout>
// 	);
// }