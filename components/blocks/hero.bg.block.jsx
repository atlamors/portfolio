/**
 * Loads and returns the background based on selected design theme
 * 
 * @param {string} slug
 * @returns 
 */
export default function HeroBg({ theme }) {
	return (
		<div className={`${theme}`}>
			{ bgSelector(theme) }
		</div>
	)
}

function bgSelector(bg) { 
	switch (bg) {
		case 'bg-color-1':
		return ( <bgColor1 /> );
	}
}