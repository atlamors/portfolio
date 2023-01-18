import grid from '../../styles/blocks/section.grid.module.scss'

export default function sectionGridBG({ gridSize = 4 }) {
	return (
		<div className={grid.block}>
			<div className={grid.Guides} aria-hidden="true">
				<div className={`${grid.Guides__container} grid-${gridSize}`}>
					{ generateGrid( gridSize, grid.Guides__guide ) }
					<style jsx>
						{`
						.${grid.Guides__container}.grid-${gridSize} { --grid-size: ${gridSize}; }
						`}
					</style>	
				</div>
			</div>
		</div>
	)
}

function generateGrid( gridSize, classProp ) {
	let grid = []
	for (var i = 0; i < gridSize + 1; i++) {
		grid.push( <div key={`grid-line-${i}`} className={`${classProp}`}></div> )
	}
	return grid
}