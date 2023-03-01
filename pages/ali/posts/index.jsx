/** @format */
import Link from 'next/link'

export default function Home({ posts }) {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<Link href={`/ali/posts/${post.id}`}>
						<p>{post.title}</p>
					</Link>
					<hr />
				</div>
			))}
		</div>
	)
}
// TO CREATE IT WITH D3.JS
//    .on('click', (event, d) => {
//           window.location.href = `/posts/${d.id}`;
//         });
export async function getStaticProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()
	return {
		props: {
			posts,
		},
	}
}








// import { useRouter } from 'next/router'
// import { useState } from 'react'

// export default function Post({ post }) {
// 	const router = useRouter()
// 	const [posts, setPosts] = useState([])
// 	const { id } = router.query
// 	const fetchPost = async () => {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// 		const data = await response.json()
// 		setPosts(data)
// 	}

// 	const handleClick = (id) => {
// 		router.push(`/ali/posts/${id}`)
// 	}

// 	return (
// 		<div>
// 			<button onClick={fetchPost}>Fetch Posts</button>
// 			<div className='text-white'>
// 				{posts.map((post) => (
// 					<p
// 						key={post.id}
// 						onClick={() => handleClick(post.id)}>
// 						{post.title}
// 					</p>
// 				))}
// 			</div>
// 		</div>
// 	)
// }
