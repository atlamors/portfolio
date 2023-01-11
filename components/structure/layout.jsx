import Navbar from './layout/navbar'
import Footer from './layout/footer'

export default function Layout({ children }) {
	return (
		<>
		<Navbar />
		<main>{children}</main>
		<Footer />
		</>
	)
}