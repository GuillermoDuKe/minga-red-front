import Carousel from "../components/Carousel.jsx"
import Hero from "../components/Hero.jsx"

export default function Index({data}) {
    return (
        <main className="lg:relative absolute w-full sm:-mt-[10%] -mt-[8%]  lg:mt-0">
        <Hero />
          {/* vista web */}
          <Carousel name={data[0].name} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} description={data[0].description}/>
        </main>
    )
}
