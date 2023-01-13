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
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li><h4>Acknowledgments</h4></li>
						<li>
							<a href="" rel="noopener" target="_blank">Jihad Hassan - Marketing Director <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
							<p>Thank you for all the advice and feedback.</p>
						</li>
						<li>	
							<a href="https://www.youworkforthem.com/designer/536/colorpong?aff=1115" rel="noopener" target="_blank">Colorpong - Artist <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
							<p>Checkout their amazing vector illustrations. </p>
						</li>
						<li>
							<a href="https://brittanychiang.com/" rel="noopener" target="_blank">Brittany Chiang - Software Engineer <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a> 
							<p>A major inspiration behind this open source theme.</p>
						</li>
						<li><a href="https://vercel.com/docs" rel="noopener" target="_blank">Vercel - Platform <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
							<p>Host your own Next.js project for free 🥳</p>
						</li>
					</ul>
					<ul className={css.links}>
						<li><h4>Links</h4></li>
						<li>
							<a href="https://www.youworkforthem.com/?aff=1115" rel="noopener" target="_blank">YWFT Creative Marketplace <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
							<p>Best in class for assets.</p>
						</li>
					</ul>
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							<a href="https://medium.com/@--andrewnelson" rel="noopener" target="_blank"><Icon icon={[ 'fab', 'medium' ]} /></a>
							<a href="https://dev.to/andrewnelson" rel="noopener" target="_blank"><Icon icon={[ 'fab', 'dev' ]} /></a>
							<a href="https://www.linkedin.com/in/--andrewnelson/" rel="noopener" target="_blank"><Icon icon={[ 'fab', 'linkedin' ]} /></a>
							<a href="https://github.com/atlamors" rel="noopener" target="_blank"><Icon icon={[ 'fab', 'github' ]} /></a>
						</li>
					</ul>
				</section>
				<section className={css.github}>
					<a href="https://github.com/atlamors/portfolio-theme"rel="noopener"  target="_blank">
						<h5>Steal this theme! Its open-source 🥰</h5>
						<ul>
							<li>
								<p><Icon icon={[ 'fad', 'code-branch' ]} /> Forks: { gitHubInfo.forks }</p>
							</li>
							<li>
								<p><Icon icon={[ 'fad', 'star' ]} /> Stars: { gitHubInfo.stars }</p>
							</li>
						</ul>
					</a>
				</section>
			</div>
		</footer>
	)
}
