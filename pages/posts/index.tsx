import React from "react";
import Title from "../../components/title";
import Layout from "../../components/layout";
import styles from "../../styles/posts.module.css";

import { getSortedPostsData } from '../../lib/posts'
import { GetStaticProps } from 'next'
import Link from "next/link";
import Date from "../../components/date";

export default function Posts({
	allPostsData
}: {
	allPostsData: {
		date: string
		title: string
		id: string
		img: string
	}[]
}) {
	return (
		<Layout>
			<Title>Posts</Title>
			<h1 className={styles.heading}>Posts</h1>
			<ul>
				{allPostsData.map(({ id, date, title, img }) => (

						<li key={id}>
						<Link href={`/posts/${id}`}>
							<img src={img} alt={title} />
							<h2>{title}</h2>
							<p>{`${id}`}</p>

							<Date dateString={date} />
						</Link>

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