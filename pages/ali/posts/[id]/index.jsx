/** @format */

import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className='text-white'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>UserId: {post.userId}</p>
      <p>Id: {post.id}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const post = await res.json();
	return {
		props: {
			post,
		}
	}
}



// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

// export default function PostDetails() {
// 	const router = useRouter()
// 	const { id } = router.query
// 	const [posts, setPosts] = useState(null)

// 	const fetchPost = async () => {
// 		const response = await fetch(
// 			`https://jsonplaceholder.typicode.com/posts/${id}`
// 		)
// 		const data = await response.json()
// 		console.log(data)
// 		setPosts(data)
// 	}

// 	useEffect(() => {
// 		fetchPost()
// 	}, [id])

// 	if (!posts) {
// 		return <div>Loading...</div>
// 	}

// 	return (
// 		<>
// 			<div className='text-warning'>
// 				{posts.map((post) => (
// 					<p key={post.id}>{post.title}</p>
// 				))}
// 			</div>
// 		</>
// 	)
// }
