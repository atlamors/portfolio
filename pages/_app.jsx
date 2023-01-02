// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css"

// Fontsource local font import (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

// Devincon import (https://github.com/devicons/devicon)
import '../node_modules/devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/svgs.css'

/**
 * This default export is required in a new `pages/_app.js` file.
 * 
 * Default export, do not modify.
 * 
 * @param {?} Component
 * @param {?} pageProps
 * @returns {jsx} <Component />
 */
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}