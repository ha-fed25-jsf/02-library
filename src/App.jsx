import './App.css'
import BookCard from './BookCard.jsx'
import { books } from './data.js'

function App() {
	return (
		<div id="app">
			<header>
				Bibblan
			</header>
			<main>
				<h1> Våra böcker </h1>
				<div className="book-grid">
					<BookCard book={books[0]} />
					<BookCard book={books[1]} hasBorrowed={true} />
					<BookCard book={books[2]} />
					<BookCard book={books[3]} />
					<BookCard book={books[4]} />

				</div>
			</main>
			<footer>
				Kontakta oss
			</footer>
		</div>
	)
}

export default App
