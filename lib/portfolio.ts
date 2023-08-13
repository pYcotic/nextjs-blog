import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const portfolioDirectory = path.join(process.cwd(), '_portfolio')

export function getSortedPortfolioData() {
	const folderNames = fs.readdirSync(portfolioDirectory);
	const allPortfolioData = folderNames.map(folderName => {
		const id = folderName;
		const fullPath = path.join(portfolioDirectory, folderName, 'index.md')
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const matterResult = matter(fileContents)
		return {
			id,
			...(matterResult.data as { title: string })
		}
	}

	)
	return allPortfolioData.sort((a, b) => {
		if (a.title < b.title) {
			return 1
		} else {
			return -1
		}
	}
	)
}

export function getAllPortfolioIds() {
	const folderNames = fs.readdirSync(portfolioDirectory)
	return folderNames.map(folderName => {
		return {
			params: {
				id: folderName
			}
		}
	})
}

export async function getPortfolioData(id: string) {
	const fullPath = path.join(portfolioDirectory, id, 'index.md');
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	let discription = processedContent.toString()

	// get image
	const imagePath = path.join(portfolioDirectory, id, 'image.jpg');

	return {
		id,
		discription,
		imagePath,
		...(matterResult.data as { title: string })
	}
}
