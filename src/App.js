import ProgressCard from "./components/ProgressCard";
import "./App.css";

function App() {
  return (
    <>
     <h1>Fitness Hub</h1>

      <section className="card-container">
        <ProgressCard name="First card" cardStyle="card--green" />
        <ProgressCard name="Second card" cardStyle="card--orange"/>
        <ProgressCard name="Third card" cardStyle="card--blue" />
        <ProgressCard name="Fourth card" cardStyle="card--purple"/>
      </section>
    </>
  );
}

export default App;
