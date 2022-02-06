import ProgressCard from "./components/ProgressCard";
import GlobalProgressCard from "./components/GlogalProgressCard";
import "./App.css";
import { useFitnessData } from "./context/fitnessDataContext";
import UpdateModal from "./components/UpdateModal";

function App() {
  const { fitnessData, getFitnessData } = useFitnessData();

  return (
    <>
      <header>
        <h1 className="text text--bold logo">Fitness Hub</h1>
      </header>

      <section className="global-info">
        <GlobalProgressCard />
      </section>

      <section className="card-container">
        <ProgressCard
          name="Walk"
          cardStyle="card--green"
          cardLabel="Distance"
          count={getFitnessData("walk").count}
          goal={getFitnessData("walk").goal}
          units="km" />
        <ProgressCard
          name="Workout"
          cardStyle="card--orange"
          cardLabel="Time"
          count={getFitnessData("workout").count}
          goal={getFitnessData("workout").goal}
          units="hrs" />
        <ProgressCard
          name="Water"
          cardStyle="card--blue"
          cardLabel="Glass"
          count={getFitnessData("water").count}
          goal={getFitnessData("water").goal}
          units="glasses" />
        <ProgressCard
          name="Sleep"
          cardStyle="card--purple"
          cardLabel="Time"
          count={getFitnessData("sleep").count}
          goal={getFitnessData("sleep").goal}
          units="hrs" />
      </section>

      <UpdateModal name="walk" color="green"/>
    </>
  );
}

export default App;
