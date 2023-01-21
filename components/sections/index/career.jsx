// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="As the Lead Developer at My Supply Co., I am responsible for the development and design of the company's online store. My tasks include identifying and improving weak points in the customer journey, automating processes to increase efficiency, and increasing store performance through design and merchandising optimizations."
				/>
				<section className={career.area}>
					<div className={career.companyArea}>
						<article className={career.company}>
							<div className={career.companyInfo}>
								<h3>My Supply Co.</h3>
								<h4>Permanent Full-time · Apr 2019 - Present · 3 yrs 10 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
								<p>
								My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
								</p>
							</div>
							<div className={career.position}>
								<div className={career.content}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
									<p>
									I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
									</p>
								</div>
							</div>
							<div className={career.position}>
								<div className={career.content}>
									<h3>Full Stack Developer & User Experience Designer</h3>
									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
									<p>
									As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
									</p>
									<p>
									Some key projects complete during this time 👇
									</p>
									<ul className="list">
										<li>
											Product attribute and settings automated testing
											<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
										</li>
										<li>
											Inventory management reporting and automation 
											<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
										</li>
										<li>
											Sales management plugin with AJAX shopping cart integration
											<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
										</li>
										<li>
											Bespoke ID verification software and WooCommerce integration
											<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
										</li>
									</ul>
								</div>
							</div>
							<div className={career.position}>
								<div className={career.content}>
									<h3>Front End Developer & User Interface Designer</h3>
									<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
									<p>
										I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
									</p>
									<p>
										Some key projects completed during this time 👇
									</p>
									<ul className="list">
										<li>
											Full functionality interactive shopping cart to replace cart page
											<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
										</li>
										<li>Complex multi-state animated menus represented in an elegant UI 
											<span className={career.subList}><span className={career.bullet}></span>Strong confidence booster with state of the art menu 😎</span>
										</li>
										<li>
											Design and development of the site and merchandising strategy optimized for market
											<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
										</li>
									</ul>
								</div>
							</div>
						</article>
						<article className={career.company}>
							<div className={career.companyInfo}>
								<h3>Another Creative Ltd.</h3>
								<h4>Contract Part-time · Jun 2016 - Present · 6 yrs 8 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
								<p>
								Another Creative is a small full stack agency that helps deliver exceptional digital experiences to small and medium businesses. Branding, Marketing, and Development.
								</p>
							</div>
						</article>
						<article className={career.company}>
							<div className={career.companyInfo}>
								<h3>West Coast Electronics</h3>
								<h4>Permanent Full-time · Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
								<p>I was the Electronics Wizard 🧙‍♂️</p>
								<p>West Coast Electronics was a repair shop that fixed computers, consoles, and cell phones.</p>
							</div>
						</article>
					</div>
				</section>
			</Container>
		</Section>
	)
}