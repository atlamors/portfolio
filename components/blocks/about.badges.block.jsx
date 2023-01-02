import Icon from '../utils/icon.util.jsx'
import Badges 	from '../utils/badge.list.util'
import badges 	from '../../styles/blocks/badges.module.scss';

export default function BadgesBlock({ title, list, block, icon, invertedColor, headerIcon, classProps }) {
	return (
		<div className={`${badges.badgeBlockContainer} ${classProps}`}>
			<span className={headerIcon}>
				<Icon icon={[ 'fat', icon ]} />
			</span>
			<h3>{title}</h3>
			<Badges list={list} block={block} invertedColor={invertedColor} />
		</div>
	)
}