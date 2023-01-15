import { useEffect, useState } from 'react'

import Link from 'next/link'

import ThemeMode from '../../utils/theme.util'

import css from '../../../styles/structure/navbar.module.scss'

export default function Navbar() {

	const [ menuState, menuToggle ] = useState()

	useEffect( () => {
		menuToggle(false)
	}, [] )

	const toggleMenu = () => {
		let bool = ! menuState
		menuToggle(bool)
	}

	useEffect( () => {

		/**
		 * Scroll events
		 */
		class NavScroll {

			constructor() {
				window.sticky		= {}
				window.sticky.nav	= document.querySelector(`nav`)

				this.addEventListeners()
			}

			addEventListeners() {
				if ( window.sticky.nav ) {
					window.addEventListener('DOMContentLoaded', this.maybeHideNav, false)
					document.addEventListener('scroll', this.maybeHideNav, false)
				}
			}

			removeEventListeners() {
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
			navScroll.removeEventListeners()
		}
	}, [] )

	return (
		<nav className={css.container}>
			<ul className={css.menu}>
				<li className={css.menuHeader}>
					<div className={css.logo}>
						Andrew Nelson
					</div>
					<button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
						<div>
							<span></span>
							<span></span>
						</div>
					</button>
				</li>
				<li data-open={menuState} className={css.menuContent}>
					<ul>
						<li>
							<Link href="/">About Me</Link>
						</li>
						{/* <li>
							<Link href="/case-studies">Case Studies</Link>
						</li>
						<li>
							<Link href="/articles">Articles</Link>
						</li> */}
						<li>
							<Link href="/projects">Projects</Link>
						</li>
						<li>
							<ThemeMode />
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
