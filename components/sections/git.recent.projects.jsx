// Section structure
import Section 		from '../structure/section';
import Container 	from '../structure/container';

import Image from 'next/image'

import Icon from '../utils/icon.util'

import css from '../../styles/sections/git.recent.module.scss'

export default function GitProjects({ repos, user }) {
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user[0].avatar_url}`} alt="Github Profile Photo" height={60} width={60}/>
					<span class={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url}</a>
					</span>
				</section>
				<div className={css.projects}>
					{
					repos.map( ({ name, fork, forks_count, html_url, language, watchers, default_branch, homepage, owner, pushed_at }) => {
						const date = new Date(pushed_at).toDateString()
						return (
							<>
							<article className={css.project}>
								<span className={css.header}>
									<a href={html_url} rel="noreferrer" target="_blank">{name} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p className={css.homepage}>{homepage}</p>
								</span>
								<span className={css.details}>
									<p><i className={`devicon-${language.toLowerCase()}-plain colored`} /> {language}</p>
									<p><Icon icon={[ 'fad', 'star' ]} /> {watchers}</p>
									<p><Icon icon={[ 'fad', 'code-branch' ]} /> {forks_count}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
							</article>
							</>
						)
					})
					}
				</div>
				{/* 
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre> 
				*/}
			</Container>
		</Section>
	)
}