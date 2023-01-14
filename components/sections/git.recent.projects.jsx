// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

export default function GitProjects({ repos, user }) {
	return (
		<Section>	
			<Container classProp={``} spacing={'verticalXXXLrg'}>
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
			</Container>
		</Section>
	)
}