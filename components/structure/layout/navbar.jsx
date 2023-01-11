import { useEffect } from 'react'

import Link from 'next/link'

import ThemeMode from '../../utils/theme.util'

import css from '../../../styles/structure/navbar.module.scss'

export default function Navbar() {

	useEffect( () => {
		/**
		 * Scroll events
		 */
		class NavScroll {

			constructor() {
				window.sticky		= {}
				window.sticky.nav	= document.querySelector(`nav`)

				this.scrollEvents()
			}

			scrollEvents() {
				if ( window.sticky.nav ) {
					window.addEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.addEventListener('scroll', this.maybeHideNav, false)
				}
			}

			removeScrollEvents() {
				if ( window.sticky.nav ) {
					window.removeEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.removeEventListener('scroll', this.maybeHideNav, false)
				}
			}

			getPosition( e = null, top = true ) {
				let offset

				if ( !e ) return

				if ( top ) {
					offset = e.getBoundingClientRect().top + document.documentElement.scrollTop - window.sticky.nav.at
					return offset
				} else {
					offset = e.getBoundingClientRect().bottom + document.documentElement.scrollTop - window.sticky.nav.at
					return offset
				}	
			}

			maybeHideNav() {

				/**
				 * If scrolling down, else if scrolling up
				 * 
				 * Add or remove hidden class from filter menu
				 */
				const nC 		= window.sticky.nav.classList
				const hero 		= document.querySelector('main > div:first-of-type')
				const hiddenAt 	= ( hero ) ? hero.getBoundingClientRect().bottom + window.scrollY : ( window.innerHeight / 2 )

				if ( window.scrollY > this.lastY && window.scrollY > hiddenAt && ! nC.contains( css.hidden ) ) {
					nC.add( css.hidden )
				} else if ( window.scrollY < this.lastY && nC.contains( css.hidden ) ) {
					nC.remove( css.hidden )
				}

				/**
				 * At end of every scroll event update the previous position
				 */
				this.lastY = window.scrollY
			}
		}

		const navScroll = new NavScroll

		return () => {
			navScroll.removeScrollEvents()
		}
	}, [] )

	return (
		<nav className={css.container}>
			<ul>
				<li>
					<Link href="/">About Me</Link>
				</li>
				<li>
					<Link href="/case-studies">Case Studies</Link>
				</li>
				<li>
					<Link href="/articles">Articles</Link>
				</li>
				<li>
					<ThemeMode />
				</li>
			</ul>
			
		</nav>
	)
}
