/** @format */

import connectMongo from '../../../utils/connectDB';
import Story from '../../../models/story';
/**
 *@param {import('next').NextApiRequest} req
 *@param {import('next').NextApiResponse} res
 */

export default async function addStory(req, res) {
	try {
		console.log('در حال اتصال به پایگاه داده ...');
		await connectMongo();
		console.log('اتصال با پایگاه داده برقرار شد...');

		const story = await Story.create(req.body);
		console.log('در حال ثبت اطلاعات ...');

		res.json({ story });
	} catch (error) {
		console.log(error);
		res.json({ error });
	}
}
