import { useState } 		from 'react';
import { TypeAnimation } 	from 'react-type-animation';

import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import space		from '../../utils/spacing.util';

import Icon 		from '../../utils/icon.util'

import HeroBg		from '../../blocks/hero.bg/bg-color-1';

import hero 		from '../../../styles/sections/index/hero.module.scss';
import button 		from '../../../styles/blocks/button.module.scss';

import content		from '../../../content/index/hero.json'


/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {

	const [typingStatus, setTypingStatus] = useState('Initializing');

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<TypeAnimation className={`${hero.preHeader}`}
					sequence={[
						content.intro.startDelay,
						() => { setTypingStatus('typing') },
						content.intro.start,
						() => {	setTypingStatus('typed') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						content.intro.end,
						() => {	setTypingStatus('deleted') },
						content.intro.restartDelay,
					]}
					speed={content.intro.speed}
					deletionSpeed={content.intro.deletionSpeed}
					wrapper={content.intro.wrapper}
					repeat={Infinity}
				/>
				<section>
					<h1 className={hero.header}>
						{content.header.name}
						</h1>
					<h1 className={`${hero.header} ${hero.primaryDim}`}>
						{content.header.usp}
					</h1>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
						{ content.paragraph }
					</p>
					{/* <p className={`${hero.tempBright} subtitle ${space(["verticalLrg"])}`}>
						This is an open source website built on Next.js and React—it is currently under construction.
						Version 1 is scheduled to be completed by Jan 30, 2023. 
						Checkout the roadmap (its updated while I&apos;m working on the site) by visiting the GitHub Repo.<br/><br/>
						
						<a href="https://github.com/atlamors/portfolio-theme" rel="noreferrer" target="_blank">https://github.com/atlamors/portfolio-theme <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a><br/><br/>

						<span className={hero.gitBadges}>
							<img src="https://img.shields.io/badge/stability-experimental-orange.svg" alt="Experimental" />
							<img src="https://vercelbadge.vercel.app/api/atlamors/portfolio-theme" alt="Vercel" />
							<img src="https://therealsujitk-vercel-badge.vercel.app/?app=portfolio-theme-jqe0jhmif-atlamors.vercel.app" alt="Vercel Deployed" />
							<img src="https://img.shields.io/github/license/atlamors/portfolio-theme" alt="Liscence" />
						</span>
					</p> */}
					
				</section>
				<section>
					<button className={`button ${button.primary}`}>
						{content.buttons.primary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}>
						{content.buttons.secondary.title}
					</button>
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}