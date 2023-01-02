function bgSelector(bg) { 
	switch (bg) {
		case 'bg-color-1':
		return ( <bgColor1 /> );
	}
}

export default function HeroBg({ theme }) {
	return (
		<div className={`${theme}`}>
			{bgSelector(theme)}
		</div>
	)
}