import "../node_modules/the-new-css-reset/css/reset.css"
import '../node_modules/devicon/devicon.min.css'

import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/svgs.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}