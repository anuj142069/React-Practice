import ClockHeading from "./components/ClockHeading";
import ClockSlogen from "./components/ClockSlogen";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center className="container">
      <ClockHeading/>
      <ClockSlogen/>
      <CurrentTime/>
    </center>
  )
}

export default App;
