
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
      <Main>
        <Index data={data}/>
      </Main>
    </>
  );
}

export default App;