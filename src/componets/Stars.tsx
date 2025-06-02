import Star from "./Star"

function Stars(props): JSX.Element {
	const { count } = props
	let contStars = [], star = Star()
	if ([1, 2, 3, 4, 5].includes(count)) {
		for (let i = 1; i <= count; i++) {
			contStars.push(star);
		}
		return (
			<>
				<div> {contStars} </div>
			</>
		)
	}
}

export default Stars