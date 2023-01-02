import badges from '../../styles/blocks/badges.module.scss';
import Icon from '../utils/icon.util.jsx'

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

