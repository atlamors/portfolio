import { useState } 		from 'react';
import { TypeAnimation } 	from 'react-type-animation';

import Section 		from '../structure/section';
import Container 	from '../structure/container';

import space		from '../utils/spacing.util';

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
				<Paragraph
					spacing={["width50", "verticalLrg"]}
					content="I am a digital polymath — a constantly evolving digital creator driven by a passion for lifelong learning and the desire to leave a lasting impact." 
				/>
			</Container>
			<Container>
				<button className={`${button.primary}`}>
					Contact Me
				</button>
				<button className={`${button.secondary} ${button.leaveSite}`}>
					LinkedIn
				</button>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}