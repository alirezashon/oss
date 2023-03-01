/** @format */

import connectMongo from '../../../utils/connectDB';
import Auth from '../../../models/auth';
/**
 *@param {import('next').NextApiRequest} req
 *@param {import('next').NextApiResponse} res
 */

export default async function register(req, res) {
	try {
		console.log('CONNECTING TO DB');
		await connectMongo();
		console.log('CONNECTED TO MONGO');

		console.log('CREATING DOCUMENT');
		const user = await Auth.create(req.body);
		res.redirect('/screens/login');
		if (!user) console.log('مشکلی در ثب نام رخ داده است !');
		console.log('CREATED DOCUMENT');
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 'امکان ثبت نام وجود ندارد' });
	}
}
