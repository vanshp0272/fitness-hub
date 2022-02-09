import ProgressCard from "./components/ProgressCard";
import GlobalProgressCard from "./components/GlogalProgressCard";
import "./App.css";
import { useFitnessData } from "./context/fitnessDataContext";
import UpdateModal from "./components/UpdateModal";
import { useEffect, useState } from "react";

function App() {
  const {
    getFitnessData,
    getDailyProgress,
    resetDailyData } = useFitnessData();
  const [currentModal, setCurrentModal] = useState();

  // Reset daily data if day changed
  useEffect(() => {
    // Compare current date to date in some data object
    const prevDate = new Date(getFitnessData("walk").date);    
    const currentDate = new Date();

    if(prevDate.getDate() !== currentDate.getDate()) {
      resetDailyData();
    }
  }, []);

  return (
    <>
      <header>
        <h1 className="text text--bold logo">Fitness Hub</h1>
      </header>

      <section className="global-info">
        <GlobalProgressCard progress={getDailyProgress()} />
      </section>

      <section className="card-container">
        <ProgressCard
          name="Walk"
          cardStyle="card--green"
          cardLabel="Distance"
          count={getFitnessData("walk").count}
          goal={getFitnessData("walk").goal}
          units="km"
          onClickModal={() => setCurrentModal("walk")} />
        <ProgressCard
          name="Workout"
          cardStyle="card--orange"
          cardLabel="Time"
          count={getFitnessData("workout").count}
          goal={getFitnessData("workout").goal}
          units="hrs"
          onClickModal={() => setCurrentModal("workout")} />
        <ProgressCard
          name="Water"
          cardStyle="card--blue"
          cardLabel="Glass"
          count={getFitnessData("water").count}
          goal={getFitnessData("water").goal}
          units="glasses"
          onClickModal={() => setCurrentModal("water")} />
        <ProgressCard
          name="Sleep"
          cardStyle="card--purple"
          cardLabel="Time"
          count={getFitnessData("sleep").count}
          goal={getFitnessData("sleep").goal}
          units="hrs"
          onClickModal={() => setCurrentModal("sleep")} />
      </section>

      <UpdateModal
        show={currentModal === "walk"}
        name="walk"
        color="green"
        step={0.1}
        onClose={() => setCurrentModal()} />
      <UpdateModal
        show={currentModal === "water"}
        name="water"
        color="blue"
        step={1}
        onClose={() => setCurrentModal()} />
      <UpdateModal
        show={currentModal === "workout"}
        name="workout"
        color="orange"
        step={1}
        doubleInput={true}
        onClose={() => setCurrentModal()} />
      <UpdateModal
        show={currentModal === "sleep"}
        name="sleep"
        color="purple"
        step={1}
        doubleInput={true}
        onClose={() => setCurrentModal()} />
    </>
  );
}

export default App;
