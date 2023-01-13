import { useEffect } from 'react'

import Section 		from '../structure/section';
import Container 	from '../structure/container';

export default function SetGridGap() {
	useEffect( () => {

		const setGapSize = () => {
			const root = document.querySelector(':root')
			const container = document.querySelector('.getGapSize__grid_32')
			
			if ( container ) {
				const readingWidth = container.clientWidth
				const grid32 = readingWidth / 32
				root.style.setProperty('--grid-32', `${grid32}px`)
			}
			
		}
		
		setGapSize()
		window.addEventListener( 'resize', setGapSize )
		
		return () => {
            window.removeEventListener( 'resize', setGapSize )
        }

	}, [] )

	return (
		<Section classProp={'getGapSize__container'}>
			<Container classProp={'getGapSize__grid_32'}></Container>
		</Section>
	)
}