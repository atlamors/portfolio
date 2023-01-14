import { useState } 		from 'react';
import { TypeAnimation } 	from 'react-type-animation';

import Section 		from '../structure/section';
import Container 	from '../structure/container';

import space		from '../utils/spacing.util';

import Icon 		from '../utils/icon.util'

import HeroBg		from '../blocks/hero.bg/bg-color-1';

import hero 		from '../../styles/sections/hero.module.scss';
import button 		from '../../styles/blocks/button.module.scss';

function PreHeader({ content }) {
	return <h2 className={hero.preHeader}>{content}</h2>;
}

function Header({ content }) {
	return <h1 className={hero.header}>{content}</h1>;
}

function HeaderInfo({ content }) {
	return <h1 className={`${hero.header} ${hero.primaryDim}`}>{content}</h1>;
}

function Paragraph({ spacing, content }) {
	return <p className={`${hero.primaryBright} subtitle ${space(spacing)}`}>{content}</p>;
}

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
			<Container>
				<TypeAnimation className={hero.preHeader}
					sequence={[
						1000,
						() => { setTypingStatus('Typing...') },
						'const Andrew = ( name, passion ) =>',
						() => {	setTypingStatus('Done Typing') },
						3000,
						() => {	setTypingStatus('Deleting...') },
						'Hello, my name is',
						() => {	setTypingStatus('Done Deleting') },
						12000,
					]}
					speed={60}
					deletionSpeed={80}
					wrapper="h2"
					repeat={Infinity}
				/>

				<Header
					content="Andrew Nelson."
				/>
				<HeaderInfo
					content="I design and build meaningful experiences."
				/>
			</Container>
			<Container>
				{/* <p className={`${hero.primaryBright} subtitle ${space(["width50", "verticalLrg"])}`}>
					I am a digital polymath — a constantly evolving digital creator driven by a passion for lifelong learning and the desire to leave a lasting impact.
				</p> */}
				<p className={`${hero.tempBright} subtitle ${space(["verticalLrg"])}`}>
					This is an open source website built on Next.js and React—it is currently under construction.
					Version 1 is scheduled to be completed by Jan 30, 2023. 
					Checkout the roadmap (its updated while I&apos;m working on the site) by visiting the GitHub Repo.<br/><br/>
					
					<a href="https://github.com/atlamors/portfolio-theme" rel="noreferrer" target="_blank">https://github.com/atlamors/portfolio-theme <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a><br/><br/>
					<div className={hero.gitBadges}>
						<img src="https://img.shields.io/badge/stability-experimental-orange.svg" alt="Experimental" />
						<img src="https://vercelbadge.vercel.app/api/atlamors/portfolio-theme" alt="Vercel" />
						<img src="https://therealsujitk-vercel-badge.vercel.app/?app=portfolio-theme-jqe0jhmif-atlamors.vercel.app" alt="Vercel Deployed" />
						<img src="https://img.shields.io/github/license/atlamors/portfolio-theme" alt="Liscence" />
					</div>
				</p>
			</Container>
			<Container>
				<button className={`button ${button.primary}`}>
					Contact Me
				</button>
				<button className={`button ${button.secondary} ${button.leaveSite}`}>
					LinkedIn
				</button>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}