import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Main({children}) {
    return (
        <>
        <NavBar />
        {/* VISTAS DINÁMICAS */}
        {children}
        <Footer />
        </>
    )
}