/** @format */

import connectMongo from '../../../utils/connectDB';
import Auth from '../../../models/auth';
/**
 *@param {import('next').NextApiRequest} req
 *@param {import('next').NextApiResponse} res
 */

export default async function login(req, res) {

	res.redirect('/');
	



	// connect To DB

	// try {
	// 	await connectMongo();
	// 	const { email, password } = req.body;
	// 	const user = await Auth.findOne({ email, password });
	// 	res.redirect('/');
	// 	if (!user) console.log('مشکلی در ورود رخ داده است !');
	// } catch (error) {
	// 	console.log(error);
	// 	res.status(400).json({ status: 'امکان ثبت نام وجود ندارد' });
	// }
}
