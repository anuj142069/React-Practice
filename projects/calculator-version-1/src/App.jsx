import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"

function App() {

  return (
    <>
      <div id="calculator" className="calculator border w-60 text-center">
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </>
  )
}

export default App
