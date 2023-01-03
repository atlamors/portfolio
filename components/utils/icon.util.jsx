// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 *
 * Todo:
 * Maybe only load Icons Being used instead of full library. Will save on compile time?
 * But what about people coming to the project new?
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {

	library.add(fat, fas, fad, far)

	const [ iconType, iconKey ] = icon

	const [ stateIconKey, setIconKey ] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [ iconKey ] )

	return (
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}
