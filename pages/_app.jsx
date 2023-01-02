import "../node_modules/the-new-css-reset/css/reset.css"

import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

import '../node_modules/devicon/devicon.min.css'

import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/svgs.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}