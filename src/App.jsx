import backgroundHome from "/img/fondo.png";
import Index from './pages/Index.jsx'
import Main from "./layouts/Main.jsx";

function App() {
  let data = [
      {
        name: "Shonen:",
        description: "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.",
        character_photo: "/img/footer1.png",
        cover_photo: "/img/footer2.png",
      } 
  ]
  return (
    <>
      <div className="flex flex-col relative items-center">
        <img className="lg:absolute w-full lg:h-[100%] lg:object-cover lg:object-top" src={backgroundHome} alt="" />
        <Main>
          <Index data={data}/>
        </Main>
      </div>
    </>
  );
}

export default App;