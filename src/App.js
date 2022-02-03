import ProgressCard from "./components/ProgressCard";
import "./App.css";

function App() {
  return (
    <>
      <h1>Fitness Hub</h1>

      <section className="card-container">
        <ProgressCard
          name="Walk" cardStyle="card--green" cardLabel="Distance"
          count={3} units="km" />
        <ProgressCard
          name="Workout" cardStyle="card--orange" cardLabel="Time"
          count={[1, 30]} units="hrs" />
        <ProgressCard
          name="Water" cardStyle="card--blue" cardLabel="Glass"
          count={6} units="glasses" />
        <ProgressCard
          name="Sleep" cardStyle="card--purple" cardLabel="Time"
          count={[6, 30]} units="hrs" />
      </section>
    </>
  );
}

export default App;
