import ProgressCard from "./components/ProgressCard";
import GlobalProgressCard from "./components/GlogalProgressCard";
import "./App.css";
import { useFitnessData } from "./context/fitnessDataContext";
import UpdateModal from "./components/UpdateModal";
import { useEffect, useState } from "react";
import ArchivedDataModal from "./components/ArchivedDataModal";
import { ImStatsBars } from 'react-icons/im';
import { fitnessCategory } from './context/fitnessDataContext';

function App() {
  const {
    getFitnessData,
    getDailyProgress,
    resetDailyData } = useFitnessData();
  const [currentModal, setCurrentModal] = useState();
  const [archivedModalActive, setArchivedModalActive] = useState(false);

  useEffect(() => {
    const prevDate = new Date(getFitnessData("walk").date);
    const currentDate = new Date();

    if (prevDate.getDate() !== currentDate.getDate()) {
      resetDailyData();
    }
  }, []);

  return (
    <>
      <header>
        <h1 className="text text--bold logo">Fitness Tracker</h1>
        <ImStatsBars
          className="stats-btn"
          onClick={() => setArchivedModalActive(!archivedModalActive)} />
      </header>

      <section className="global-info">
        <GlobalProgressCard progress={getDailyProgress()} />
      </section>

      <section className="card-container">
        {fitnessCategory.map(card => (
          <ProgressCard
            key={card.name}
            name={card.name.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())}
            cardStyle={`card--${card.color}`}
            cardLabel={card.measure.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())}
            count={getFitnessData(card.name).count}
            goal={getFitnessData(card.name).goal}
            units={card.units}
            onClickModal={() => setCurrentModal(card.name)}
          />
        ))}
      </section>

      {fitnessCategory.map(card => (
        <UpdateModal
          key={`${card.name}-modal`}
          show={currentModal === card.name}
          name={card.name}
          color={card.color}
          step={card.unitStep}
          doubleInput={card.doubleInput}
          onClose={() => setCurrentModal()} />
      ))}
      <ArchivedDataModal show={archivedModalActive} />
    </>
  );
}

export default App;
