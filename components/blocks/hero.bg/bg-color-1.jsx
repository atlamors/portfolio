// Core packages
import Image from 'next/image'

/**
 * scss for themes elements should probably have a specific scss for it
 * /styles/blocks/hero.bg.module.scss
 */
import hero from '../../../styles/sections/index/hero.module.scss';

export default function bgColor1() {
	return (
		<div className={`${hero.colorfulV1}`}>
			<div className={`${hero.barContainer} noEvents`}>
				<div className={`${hero.barGradient}`}></div>
			</div>
			<div className={`${hero.radialContainer} noEvents`}>
				{/* <Image src="/img/dataism-24.svg" className={`${hero.svg_background}`} height={2000} width={2000} alt="Dataism 24 by Colorpong: https://ywft.us/2c4d58b21" /> */}
				<div className={`${hero.radialGradient}`}></div>
			</div>
		</div>
	)
}