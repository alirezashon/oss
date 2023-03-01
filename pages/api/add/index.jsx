/** @format */

import connectMongo from '../../../utils/connectDB';
import Product from '../../../models/product';
/**
 *@param {import('next').NextApiRequest} req
 *@param {import('next').NextApiResponse} res
 */

export default async function addProduct(req, res) {
	try {
		console.log('CONNECTING TO DB');
		await connectMongo();
		console.log('CONNECTED TO MONGO');

		console.log('CREATING DOCUMENT');
		const product = await Product.create(req.body);
		console.log('CREATED DOCUMENT');

		res.json({ product });
	} catch (error) {
		console.log(error);
		res.json({ error });
	}
}
