import { useState, useEffect } from "react"

import Recent from '../../components/sections/articles/recent'

import settings from '../../content/settings.json'

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	console.log(settings.username.medium)

	const [ mediumRSS ] = await Promise.all( [
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
	] )
	
	let [ mediumArticles ] = await Promise.all( [
		mediumRSS.json(),
	] )

	return { props: { mediumArticles } }
}

export default function Articles({ mediumArticles }) {
	return (
		<>
		<Recent mediumArticles={mediumArticles}/>
		</>
	)
}