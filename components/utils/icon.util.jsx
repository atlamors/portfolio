import { useEffect, useState } from 'react'

const { library } = require('@fortawesome/fontawesome-svg-core');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'

library.add(fat, fas, fad, far)

export default function Icon({ icon }) {

	const [ iconType, iconKey ] = icon

	const [stateIconKey, setIconKey] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [] )

	return (	
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}
