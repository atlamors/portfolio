// Core packages
import Image from 'next/image'

// Section structure
import Section from '../structure/section';
import Container from '../structure/container';

// Section general blocks
import SectionTitle from '../blocks/section.title.block'
import SectionGridBg from '../blocks/section.grid.block'

// Career scss
import career from '../../styles/sections/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={career.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="As the Lead Developer at My Supply Co., I am responsible for the development and design of the company's online store. My tasks include identifying and improving weak points in the customer journey, automating processes to increase efficiency, and increasing store performance through design and merchandising optimizations."
				/>
				<Container classProp={`${career.area}`}>
					<div className={career.companyArea}>
						<div className={`${career.lines} row-1`}></div>
						<div className={`${career.company} row-1`}>
							<div className={career.position}>
								<div className={`${career.lines}`}></div>
								<div className={`${career.content}`}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
									<p>
									My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
									</p>
								</div>
							</div>
							<div className={career.position}>
								<div className={`${career.lines}`}></div>
								<div className={`${career.content}`}>
									<h3>Full Stack Developer & User Experience Designer</h3>
									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
									<p>
									My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
									</p>
								</div>
							</div>
							<div className={`${career.position} ${career.first}`}>
								<div className={`${career.lines}`}></div>
								<div className={`${career.content}`}>
									<h3>Front End Developer & User Interface Designer</h3>
									<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
									<p>
									My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
									</p>
								</div>
							</div>
							<div className={`${career.position} ${career.connector}`}>
								<div className={`${career.lines}`}></div>
								<div className={`${career.content}`}>
								</div>
							</div>
							<div className={`${career.companyInfo}`}>
								<h3>My Supply Co.</h3>
								<h4>Permanent Full-time · Apr 2019 - Present · 3 yrs 10 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
								<p>
								My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
								</p>
							</div>
						</div>
						<div className={`${career.lines} row-2`}></div>
						<div className={`${career.company} row-2`}>
							<h3>Another Creative Ltd.</h3>
							<h4>Contract Part-time · Jun 2016 - Present · 6 yrs 8 mos</h4>
							<h5>Vancouver, British Columbia, Canada</h5>
							<p>
							Another Creative is a small full stack agency that helps deliver exceptional digital experiences to small and medium businesses. Branding, Marketing, and Development.
							</p>
						</div>
						<div className={`${career.lines} row-3`}></div>
						<div className={`${career.company} row-3`}>
							<h3>West Coast Electronics</h3>
							<h4>Permanent Full-time · Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
							<h5>Vancouver, British Columbia, Canada</h5>
							<p>
							Electronics repair shop fixing computers, consoles, and cell phones.
							</p>
						</div>
					</div>
				</Container>
			</Container>
			<SectionGridBg gridSize={8}/>
		</Section>
	)
}