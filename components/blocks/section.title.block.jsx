export default function SectionTitle({ preTitle, title, subTitle }) {
	return (
		<>
		<h4>{preTitle}</h4>
		<h2>{title}</h2>
		<p className="subtitle">{subTitle}</p>
		</>
	)

}