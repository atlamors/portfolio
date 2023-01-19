// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Load icons into
library.add(fat, fal, fas, fad, far, fab)

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 * 
 * ! Can only distribute free icons
 * ? give users access to cheat sheet of free icons
 * ? pre-select those icons in a MD file
 * ? use MD file to only load those icons from the lib
 * 
 * ! requiring the library will likely create a SSR issue
 * ! According to maintainers of @fortawesome the best solution will be to import the icon directly 
 * ! and avoit the library module all together which is inline with MD loading plans
 * * https://github.com/FortAwesome/Font-Awesome/issues/19348
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {

	const [ iconType, iconKey ] = icon

	const [ stateIconKey, setIconKey ] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [ iconKey ] )

	return (
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}
