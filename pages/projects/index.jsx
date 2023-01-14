// Section structure
import GitRecentProjects	from '../../components/sections/git.recent.projects'

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
			({ login, avatar_url, html_url }) => ({ login, avatar_url, html_url })
		)
	}
	
	if (repos.length) {
		repos = repos.map( 
			({ name, fork, html_url, language, watchers, default_branch, homepage, owner, pushed_at }) => {
				const mdurl = `https://raw.githubusercontent.com/${owner.login}/${name}/${default_branch}/README.md` 
				const timestamp = Math.floor(new Date(pushed_at) / 1000)
				return ({ name, fork, html_url, language, watchers, default_branch, homepage, mdurl, timestamp })
			}
		)

		repos.sort( (a, b) => b.timestamp - a.timestamp )

		repos = repos.filter((e, i) => {
			if ( i < 8 ) return e
			else return false
		})
	}

	if (!repos || !user) { return { notFound: true,	} }

	return { props: { repos, user } }
}

export default function Projects({ user, repos }) {
	return (
		<>
		<GitRecentProjects user={user} repos={repos} />
		</>
	)
}