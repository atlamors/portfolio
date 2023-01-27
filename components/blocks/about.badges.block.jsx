
import Icon from '../utils/icon.util.jsx'
import Badges 	from '../utils/badge.list.util'

import badges 	from '../../styles/blocks/badges.module.scss';

export default function BadgesBlock({ title, copy, list, fullContainer, block, icon, invertedColor, headerIcon, containerClass }) {
	return (
		<div className={`${badges.badgeBlockContainer} ${containerClass}`}>
			<span className={headerIcon}>
				<Icon icon={[ 'fat', icon ]} />
			</span>
			<h3>{title}</h3>
			<Copy copy={copy} />
			<Badges list={list} block={block} invertedColor={invertedColor} fullContainer={fullContainer} />
		</div>
	)
}

function Copy({copy}) {
	if (copy) 
		return (
			<p>{copy}</p>
		)
}