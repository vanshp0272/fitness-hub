import ProgressCard from "./components/ProgressCard";
import "./App.css";

function App() {
  return (
    <>
      Fitness Hub

      <section className="card-container">
        <ProgressCard name="First card" />
        <ProgressCard name="Second card" />
        <ProgressCard name="Third card" />
        <ProgressCard name="Fourth card" />
      </section>
    </>
  );
}

export default App;
