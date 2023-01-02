import Icon from '../utils/icon.util'
import space from '../utils/spacing.util';

export default function CopyBlock({ classProps, icon, title, copy }) {
	return (
		<>
		<span className={classProps}>
			<Icon icon={icon} />
		</span>
		<h3>{title}</h3>
		<p className={`${space('bottomXLrg')}`}>
			{copy}
		</p>
		</>
	)
}