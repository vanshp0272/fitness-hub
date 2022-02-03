import ProgressCard from "./components/ProgressCard";
import GlobalProgressCard from "./components/GlogalProgressCard";
import "./App.css";

function App() {
  return (
    <>
      <h1>Fitness Hub</h1>

      <section className="global-info">
        <GlobalProgressCard />
      </section>

      <section className="card-container">
        <ProgressCard
          name="Walk" cardStyle="card--green" cardLabel="Distance"
          count={3} goal={5} units="km" />
        <ProgressCard
          name="Workout" cardStyle="card--orange" cardLabel="Time"
          count={[1, 30]} goal={[2, 0]} units="hrs" />
        <ProgressCard
          name="Water" cardStyle="card--blue" cardLabel="Glass"
          count={6} goal={8} units="glasses" />
        <ProgressCard
          name="Sleep" cardStyle="card--purple" cardLabel="Time"
          count={[6, 30]} goal={[8, 0]} units="hrs" />
      </section>
    </>
  );
}

export default App;
