import sections from '../../styles/structure/section.module.scss';

export default function Section({ classProp, children }) {

	const _class = classProp ? classProp : '';

	return (
		<div className={`${sections.default} ${_class}`}>
			{children}
		</div>
	);
}