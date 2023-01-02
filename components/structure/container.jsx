import styles from '../../styles/structure/container.module.scss';
import space from '../utils/spacing.util';

export default function Container({ classProp, spacing, children }) {

	const _class = classProp ? classProp : '';

	return ( 
		<div className={`${styles.readingWidth} ${_class} ${space(spacing)}`}>
			{children}
		</div>
	);
}