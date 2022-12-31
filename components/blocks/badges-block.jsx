const { library } = require('@fortawesome/fontawesome-svg-core');

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'

library.add(fat, fas, fad)

import Badges 	from './badges'
import badges 	from '../../styles/blocks/badges.module.scss';

export default function BadgesBlock({ title, list, block, icon, invertedColor, headerIcon }) {
	console.log(icon)
	return (
		<div className={badges.badgeBlockContainer}>
			<span className={headerIcon}>
				<FontAwesomeIcon icon={[ 'fat', icon ]} />
			</span>
			<h3>{title}</h3>
			<Badges list={list} block={block} invertedColor={invertedColor} />
		</div>
	)
}