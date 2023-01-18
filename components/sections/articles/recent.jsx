import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {

	const feed 		= mediumArticles.feed
	const articles 	= mediumArticles.items

	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXLrg'}>
				<h3>Recent Articles</h3>
				<br/><br/><br/><br/>
				<div className={css.projects}>
					{
					articles.map( ({ title, pubDate, link, author, thumbnail, categories }) => {
						const date = new Date(pubDate).toDateString()
						return (
							<>
							<article className={css.project}>
								<span className={css.featuredImage}>
									<img src={thumbnail} alt="Article thumbnail" />
								</span>
								<span className={css.header}>
									<a href={link} rel="noreferrer" target="_blank">{title} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
								</span>
								<span className={css.descriptionContainer}>
								</span>
								<span className={css.details}>
									<p>By {author}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
								<span className={css.topicsContainer}>
									{
									categories.map( (e) => {
										return ( <span className={css.topics}><Icon icon={[ 'fab', 'medium' ]} /> {e}</span> )
									})
									}
								</span>
							</article>
							</>
						)
					})
					}
				</div>
			</Container>
		</Section>
	)
}