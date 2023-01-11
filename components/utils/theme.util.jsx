import { useState, useEffect } from "react"

import Script from 'next/script'

import css from '../../styles/utils/theme.module.scss'

export default function SetTheme() {
	
	const [theme, setTheme] = useState()

	const toggleTheme = () => {
		if ( theme == 'light') {
			setTheme('dark')
		} else if ( theme == 'dark' ) {
			setTheme('unicorn')
		} else if ( theme == 'unicorn' )  {
			setTheme('light')
		}
	}

	const buttonIcon = (theme) => {
		if ( theme == 'light') {
			return ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z"/></svg> )
		} else if ( theme == 'dark' ) {
			return ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/></svg> )
		} else if ( theme == 'unicorn' )  {
			return ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4.823 21.933l2.734-1.171-3.241-8.847-1.561 4.372 2.068 5.646zm-2.594-4.174l-2.229 6.241 3.903-1.672-1.674-4.569zm6.248 2.609l2.934-1.258-3.482-9.141-2.215-1.969-.872 2.443 3.635 9.925zm7.523-3.224l-6.453-5.736 2.785 7.308 3.668-1.572zm-.826-5.003l2.201-1.445c.23-.152.295-.462.143-.693-.152-.232-.463-.295-.692-.143l-2.201 1.445c-.231.151-.295.461-.144.692.096.147.256.226.418.226.095 0 .19-.026.275-.082m-2.993-4.312l1.112-2.388c.117-.25.008-.548-.242-.664-.251-.116-.548-.009-.665.242l-1.111 2.388c-.117.25-.008.547.242.664l.211.047c.189 0 .368-.107.453-.289m-2.627.709c1.539-2.963 1.644-5.73.314-8.222-.09-.169-.263-.265-.442-.265-.37 0-.621.398-.44.736 1.166 2.184 1.058 4.637-.32 7.29-.127.245-.031.547.214.674.073.038.152.057.23.057.18 0 .355-.099.444-.27m6.505 6.095c2.017-1.434 4.463-1.64 7.272-.613.327.119.672-.123.672-.47 0-.203-.125-.395-.328-.47-3.136-1.147-5.894-.9-8.196.738-.224.16-.277.472-.117.698.098.136.251.209.407.209.101 0 .202-.03.29-.092m3.757-6.757l-1.697.014.938 1.415-.511 1.618 1.635-.455 1.381.986.073-1.696 1.365-1.009-1.591-.592-.538-1.61-1.055 1.329zm-7.307 3.624c.276-.009.492-.24.483-.517-.056-1.627.36-1.937 1.377-2.051 1.689-.191 1.785-1.312 1.842-1.982.053-.637.071-.851.773-.903.63-.046 1.331-.16 1.76-.659.461-.538.466-1.358.402-2.164-.021-.276-.266-.478-.537-.459-.275.021-.481.262-.459.537.062.787.011 1.23-.165 1.434-.149.174-.48.271-1.074.314-1.553.114-1.644 1.179-1.697 1.816-.057.668-.082.973-.956 1.071-2.075.234-2.315 1.619-2.266 3.08.01.27.231.483.5.483h.017m7.842-8.675c0 1.006.818 1.824 1.825 1.824 1.006 0 1.824-.818 1.824-1.824 0-1.007-.818-1.825-1.824-1.825-1.007 0-1.825.818-1.825 1.825m-6.623-2.841c1.104 0 2 .897 2 2 0 1.104-.896 2-2 2-1.103 0-2-.896-2-2 0-1.103.897-2 2-2"/></svg> )
		}
	}

	const defaultTheme = () => {
		const themeLocalStorage = localStorage.getItem('theme')
		const themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

		return ( themeLocalStorage ?? themeSystem )
	}

	useEffect( () => {

		if ( ! theme ) return setTheme( defaultTheme() )

		document.querySelector(':root').dataset.theme = ( theme )
		localStorage.setItem( 'theme', ( theme ) )
		
		const useSetTheme = (e) =>{ setTheme( e.matches ? 'dark' : 'light' ) }

		const watchSysTheme = window.matchMedia('(prefers-color-scheme: dark)')

		watchSysTheme.addEventListener( 'change', useSetTheme )

		return () => {
			watchSysTheme.removeEventListener( 'change', useSetTheme )
		}
	}, [theme] )
	
	return (
		<>
			<Script id="theme.util.jsx" strategy="beforeInteractive" >
				{`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
			</Script>
			<button key="themeToggle" onClick={toggleTheme} data-theme={theme} className={css.toggle}>{buttonIcon(theme)}</button>
		</>
	)
}