import { useState } from 'react'

const BookCard = ({ book, hasBorrowed=false }) => {
	const [borrowed, setBorrowed] = useState(hasBorrowed)

	const toggle = () => setBorrowed(b => !b)

	return (
		<div className="card">
			<h3> {book.title} </h3>
			<img alt="bild" src={book.imageUrl} />
			<p> {book.author} </p>
			<button
				className={borrowed ? 'return' : ''}
				onClick={toggle}
				> {borrowed ? 'Återlämna' : 'Låna'} </button>
		</div>
	)
}

export default BookCard
