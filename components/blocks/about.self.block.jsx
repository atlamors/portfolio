import CopyBlock from "./about.copy.block"
// Section scss
import about from '../../styles/sections/index/about.module.scss';

/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	title to be displayed
 * @param {string} 	position to be displayed 
 * @param {string} 	description written content
 * @param {string} 	img src to image
 * @param {string}  alt description of image
 * @param {string}  linkedin url to the linkedin profile
 * @returns {jsx} <SelfDescription />
 */
export default function SelfDescription({content}) {
	const {title, img, alt, position, description, linkedin } = content
    return (
		<div className={about.image}>
            <img src={img} alt={alt}/>
            <div className={about.copy} >
                <CopyBlock 
                    title={title}
                    position={position}
                    containerClass={about.container}							
                    copy={description}
                    linkedin={linkedin}
                />
            </div>					
        </div>
	)
}