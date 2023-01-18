import Recent from '../../components/sections/articles/recent'

import medium from '../../content/articles/medium.json'

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ mediumRSS ] = await Promise.all( [
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${medium.username}`),
	] )
	
	let [ mediumArticles ] = await Promise.all( [
		mediumRSS.json(),
	] )

	return { props: { mediumArticles } }
}

export default function Articles({ mediumArticles }) {
	return (
		<>
		<Recent mediumArticles={mediumArticles} />
		</>
	)
}