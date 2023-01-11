import { useState, useEffect } from 'react'

import Icon from '../../utils/icon.util'

import css from '../../../styles/structure/footer.module.scss'

export default function Footer() {
	
	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		//if (process.env.NODE_ENV !== 'production') return

		fetch('https://api.github.com/repos/atlamors/portfolio-theme')
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
		.catch(e => console.error(e));
	}, []);
	
	return (
		<footer className={css.container}>
			<div>
				<section className={css.columns}>
					<div className={css.thanks}>
						<h5>Shoutouts!</h5>
						<p>Jihad Hassan: Marketing Director @ Another Creative Ltd. Thank you for all the advice and feedback on projects we work on together.</p>					
						<p>Colorpong: Checkout their amazing vector illustrations. https://www.youworkforthem.com/designer/536/colorpong?aff=1115</p>
						<p>Brittany Chiang: A major inspiration behind this open source theme https://brittanychiang.com/</p>
						<p>Vercel: They offer so much in terms of free resources for Nextjs (including hosting). I&#39;m rooting for them! https://vercel.com/</p>
					</div>

					<div className={css.links}>
						<h5>Links</h5>
						<p>YouWorkForThem Creative Marketplace https://www.youworkforthem.com/?aff=1115</p>
						<p>Dev.to Profile</p>
						<p>LinkedIn Profile</p>
						<p>GitHub Repo</p>
					</div>
				
				</section>
				<section className={css.github}>
					<h5>Steal this theme! Its open-source 🥰</h5>
					<ul>
						<li>
							<p><Icon icon={[ 'fad', 'code-branch' ]} /> Forks: { gitHubInfo.forks }</p>
						</li>
						<li>
							<p><Icon icon={[ 'fad', 'star' ]} /> Stars: { gitHubInfo.stars }</p>
						</li>
					</ul>
				</section>
			</div>
		</footer>
	)
}