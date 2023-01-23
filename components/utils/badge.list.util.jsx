import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

// Utility components
import Icon from '../utils/icon.util.jsx'

/**
* scss reference for utils should probably be pulled in from the first component under the section
*/
import badges from '../../styles/blocks/badges.module.scss';


export default function Badges({ list, block, invertedColor }) {

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.5,
		"triggerOnce": true
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
	}, [ controls, inView ] );

	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.05,
				staggerChildren: 0.05
			}
		}
	}
	
	const item = {
		hidden: { y: 40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	}


	return (
		<m.ul
			className={`${badges.list} ${badges[block]} ${badges[invertedColor]}`}
			//Animations
				ref={ref}
				variants={container}
				initial="hidden"
				animate={controls}
		>
		{
		list.map( ({ key, name, type }) => {
			return ( 
				<m.li 
					key={name} 
					className={`${badges.item} ${key}`}
					//Animations
						variants={item} 
				>
					<IconModule iconKey={key} iconType={type} />
					<span className={badges.title}>{name}</span>
				</m.li> 
				)
			}) 
		}
		</m.ul>
	)
}

function IconModule({ iconKey, iconType }) {
	switch (iconType) {
		case 'far':
		case 'fad':
		case 'fat':
		case 'fas':
		return ( <Icon icon={[ iconType, iconKey ]} /> )
		case 'devicon':
		return ( <i className={`devicon-${iconKey}-plain colored`} /> )
		default:
		return ( '' )
	}
}
		
		