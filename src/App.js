import ProgressCard from "./components/ProgressCard";
import "./App.css";

function App() {
  return (
    <>
     <h1>Fitness Hub</h1>

      <section className="card-container">
        <ProgressCard name="Walk" cardStyle="card--green" />
        <ProgressCard name="Workout" cardStyle="card--orange"/>
        <ProgressCard name="Water" cardStyle="card--blue" />
        <ProgressCard name="Sleep" cardStyle="card--purple"/>
      </section>
    </>
  );
}

export default App;
