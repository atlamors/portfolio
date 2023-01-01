const { library } = require('@fortawesome/fontawesome-svg-core');

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'

library.add(fat, fas, fad, far)

import badges from '../../styles/blocks/badges.module.scss';

function IconModule({ iconKey, iconType }) {

	const [stateIconKey, setIconKey] = useState('circle-notch')

	switch (iconType) {
		case 'far':
		case 'fad':
		case 'fat':
		case 'fas':
			useEffect( () => setIconKey(iconKey), [] )
			return ( <FontAwesomeIcon icon={[ iconType, stateIconKey]} /> )
		case 'devicon':
			return ( <i className={`devicon-${iconKey}-plain colored`} /> )
		default:
			return ( '' )
	}
}

export default function Badges({ list, block, invertedColor }) {
	return (
		<ul className={`${badges.list} ${badges[block]} ${badges[invertedColor]}`}>
			{
			list.map( ({ key, name, type }) => {
				return ( 
					<li key={name} className={`${badges.item} ${key}`}>
						<IconModule iconKey={key} iconType={type} />
						<span>{name}</span>
					</li> 
				)
			}) 
			}
		</ul>
	)
}

