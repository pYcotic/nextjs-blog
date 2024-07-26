import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const client = await pool.connect();
	try {
		const result = await client.query('SELECT * FROM programming_languages');
		res.status(200).json(result.rows);
	} catch (error) {
		console.error('Database query error', error);
		res.status(500).json({ error: 'Internal Server Error' });
	} finally {
		client.release();
	}
}

