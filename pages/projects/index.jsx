// Sections
import GitRecentProjects from '../../components/sections/git.recent.projects'
import FeaturedProjects from '../../components/sections/featured.projects'

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ gitUserRes, gitReposRes] = await Promise.all( [
		fetch(`https://api.github.com/users/atlamors`),
		fetch(`https://api.github.com/users/atlamors/repos`),
	] )
	
	let [ user, repos] = await Promise.all( [
		gitUserRes.json(),
		gitReposRes.json(), 
	] )

	if (user.login) {
		user = [user].map( 
			({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
		)
	}
	
	if (repos.length) {
		repos = repos.map( 
			({ name, fork, forks_count, html_url, language, watchers, default_branch, homepage, owner, pushed_at, topics }) => {
				const mdurl = `https://raw.githubusercontent.com/${owner.login}/${name}/${default_branch}/README.md` 
				const timestamp = Math.floor(new Date(pushed_at) / 1000)
				return ({ name, fork, forks_count, html_url, language, watchers, default_branch, homepage, mdurl, timestamp, topics, pushed_at })
			}
		)

		repos.sort( (a, b) => b.timestamp - a.timestamp )

		repos = repos.filter( (e, i) => {
			if ( i < 8 && ! e.topics.includes('github-config')) return e
			return false
		})
	}

	if (!repos || !user) { return { notFound: true,	} }

	return { props: { repos, user } }
}

export default function Projects({ user, repos }) {
	return (
		<>
		<FeaturedProjects />
		<GitRecentProjects user={user} repos={repos} />
		</>
	)
}