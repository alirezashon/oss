/** @format */

import connectMongo from '../../../../../../utils/connectDB';
import HorizontalBar from '../../../../../../models/charts/Bar/Horizontal';
/**
 *@param {import('next').NextApiRequest} req
 *@param {import('next').NextApiResponse} res
 */

export default async function Horizontal(req, res) {
	try {
		console.log('CONNECTING TO DB');
		await connectMongo();
		console.log('CONNECTED TO MONGO');

		console.log('CREATING DOCUMENT');
		const horizontal = await HorizontalBar.create(req.body);
		res.redirect('/');
		if (!horizontal) console.log('خطای بارگذاری داده !');
		console.log('CREATED DOCUMENT');
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 'عدم اتصال به پایگاه داده' });
	}
}
