import { useState, useEffect } from "react"

import Recent 		from '../../components/sections/articles/recent'

import Color 	from '../../components/utils/page.colors.util'

import colors 		from '../../content/articles/_colors.json'
import settings 	from '../../content/_settings.json'

//
export default function Articles({ mediumArticles }) {
	return (
		<>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles}/>
		</>
	)
}

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