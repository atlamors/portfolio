import Section 		from '../structure/section';
import Container 	from '../structure/container';

import css 			from '../../styles/sections/projects/featured.module.scss'

export default function ComingSoon() {
	return (
		<Section classProp={css.hasBg}>	
			<Container>
				<h2 className="fullHeight centered">Coming Soon!</h2>
				<style jsx>{`
				.fullHeight {
					min-height: 500px;
					height: 100vh;
					max-height: 1200px;
				}
				.centered {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}