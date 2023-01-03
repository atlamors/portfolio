getGridGap()

window.addEventListener( 'resize', getGridGap )
window.addEventListener( 'DOMContentLoaded', getGridGap )

function getGridGap() {
	const root			= document.querySelector(':root')
	const container 	= document.querySelector('.container_readingWidth__VNGAE')
	const readingWidth 	= container.clientWidth
	const grid32		= readingWidth / 32

	root.style.setProperty('--grid-32', `${grid32}px`);
}