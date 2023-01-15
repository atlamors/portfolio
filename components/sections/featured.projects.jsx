// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

import BadgesBlock from '../blocks/about.badges.block'
import Badges from '../utils/badge.list.util'

import HeroBg		from '../blocks/hero.bg/bg-color-1';

import css from '../../styles/sections/featured.projects.module.scss'

export default function FeaturedProjects() {

	const mysupplycoStack = [
		{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
		{ key: 'mysql', 		name: 'mySQL', 				type: 'devicon' },
		{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
		{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
		{ key: 'wordpress',		name: 'Wordpress', 			type: 'devicon' },
		{ key: 'html5',			name: 'HTML5', 				type: 'devicon' },
		{ key: 'css3',			name: 'CSS3', 				type: 'devicon' },
		{ key: 'sass',			name: 'SCSS', 				type: 'devicon' },
		{ key: 'github',		name: 'GitHub', 			type: 'devicon' },
		{ key: 'google',		name: 'GA4/GTM', 			type: 'devicon' },
	]

	const portfolioStack = [
		{ key: 'nextjs', 		name: 'Next.js', 			type: 'devicon' },
		{ key: 'react', 		name: 'React', 				type: 'devicon' },
		{ key: 'nodejs', 		name: 'Node.js', 			type: 'devicon' },
		{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
		{ key: 'html5',			name: 'HTML5', 				type: 'devicon' },
		{ key: 'css3',			name: 'CSS3', 				type: 'devicon' },
		{ key: 'sass',			name: 'SCSS', 				type: 'devicon' },
		{ key: 'github',		name: 'GitHub', 			type: 'devicon' },
	]
	

	return (
		<Section classProp={css.hasBg}>	
			<Container classProp={''} spacing={'verticalXXXLrg'}>
				<h3>Featured Projects</h3>
				<br/><br/>

				<section className={css.project}>
					<div className={css.details}>
					<h3>My Supply Co. <span className={css.privateOr}><i class="devicon-github-plain"></i>Private</span></h3>
					<p>E-commerce</p>
					<br/><br/>
					<h4>Roles</h4>
					<br/>
					<ul className={`list ${css.description}`}>
						<li><p>User Experience and Interface Design</p></li>
						<li><p>Business and Product Development</p></li>
						<li><p>Full Stack Development</p>	</li>
					</ul>
					<br/><br/>
					<Badges list={mysupplycoStack} block="stack" />
					</div>
					<div className={css.image}>
						<img src="/img/featured-mysupplyco.png" alt="Featured photo"/>
					</div>
				</section>

				<section className={css.project}>
					<div className={css.details}>
					<h3>andrewnelson.net <span className={css.privateOr}><i class="devicon-github-plain"></i>Public</span></h3>
					<p>Open Source Portfolio Website</p>
					
					<br/><br/>
					<h4>About</h4>
					<br/>
					<p className={css.description}>
						This is my first open-source project. I&apos;m trying to balance the UI/UX and DX to create something that brings an educational and networking value to whoever wants to use it. 
					</p>
					<br/><br/>
					<Badges list={portfolioStack} block="stack" />
					</div>
					<div className={css.image}>
						<img src="/img/preview.png" alt="Featured photo"/>
					</div>
				</section>

			</Container>
			<div className={css.bgContainer}>
				<span class={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span class={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}