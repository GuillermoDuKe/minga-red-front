import backgroundHome from "/img/fondo.png";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Main({children}) {
    return (
        <>
            <div className="flex flex-col relative items-center">
                <img className="lg:absolute w-full lg:h-[100%] lg:object-cover lg:object-top" src={backgroundHome} alt="" />
                <NavBar />
                    {/* VISTAS DINÁMICAS */}
                    {children}
                <Footer />
            </div>
        </>
    )
}