import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
// import html from 'remark-html'

const portfolioDirectory = path.join(process.cwd(), '_portfolio')

// i want to create a list of folder names in the portfolio directory
// then take the list and search each folder to list its contents

interface Portfolio {
	id: string;
	description: string;
	images: string[];
}

export function getPortfolioList(): Portfolio[] {
	const folderNames = fs.readdirSync(portfolioDirectory);
	const portfolioItems: Portfolio[] = [];

	folderNames.forEach(folderName => {
		const folderPath = path.join(portfolioDirectory, folderName);
		try {
			const fileContent = fs.readFileSync(path.join(folderPath, 'index.md'), 'utf-8');
			
			const { data, content } = matter(fileContent);
			const { title } = data;

			const description = content;

			const imageFiles = fs.readdirSync(folderPath).filter((fileName) => {
				return fileName.match(/\.jpg$/);
			})

			const images = imageFiles.map((fileName) => {
				return path.join(folderPath, fileName);
			});

			portfolioItems.push({
				id: folderName,
				title,
				description,
				images
			});
		} catch (e) {
			console.error(`Error reading files in ${folderPath}`, e);
		}
	});
	return portfolioItems;
}