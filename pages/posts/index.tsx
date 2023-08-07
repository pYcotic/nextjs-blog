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
		image: string
	}[]
}) {
	return (
		<Layout>
			<Title>Posts</Title>
			<h1 className={styles.heading}>Posts</h1>
			<ul>
				{allPostsData.map(({ id, date, title, image }) => (
					<Link href={`/posts/${id}`}>
						<li className={styles.liPost} key={id}>
								<div className={styles.divImage}>
									<img className={styles.imagePost} src={image} alt={title} />
								</div>
								<div className={styles.divData}>
									<h2 className={styles.h2Post}>{title}</h2>
									<p className={styles.pPost}>{`${id}`}</p>
									<Date className={styles.datePost} dateString={date} />
								</div>
						</li>
					</Link>
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