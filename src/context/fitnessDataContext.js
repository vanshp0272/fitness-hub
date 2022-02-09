import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FitnessDataContext = React.createContext();

export function useFitnessData() {
  return useContext(FitnessDataContext);
}

export const FitnessDataProvider = ({ children }) => {
  // Set fitnessData to local storage value, else to default data
  const [fitnessData, setFitnessData] = useLocalStorage("fitnessData", [
    {
      name: "walk",
      date: Date.now(),
      count: 0,
      goal: 5
    },
    {
      name: "workout",
      date: Date.now(),
      count: [0,0],
      goal: [2,0]
    },
    {
      name: "water",
      date: Date.now(),
      count: 0,
      goal: 8
    },
    {
      name: "sleep",
      date: Date.now(),
      count: [0,0],
      goal: [8,0]
    }
  ]);

  // === FUNCTIONS TO CREATE, READ AND UPDATE FITNESS DATA ===

  // TODO: Reset counters to 0 each day

  // Get fitness data based on name, i.e. "walk"
  function getFitnessData(name) {
    return fitnessData.find(data => data.name === name);
  }

  // Update count or goal of fitness data with given name
  function updateFitnessData(name, { count, goal }) {
    // Delete fitness data with given name 
    setFitnessData(previousData => {
      return previousData.filter(data => data.name !== name);
    });

    // Create new data item and append to fitnessData
    const newData = {
      name: name,
      date: Date.now(),
      count: count,
      goal: goal
    };

    setFitnessData(previousData => {
      return [...previousData, newData]
    });
  }

  // Return the global progress combining each card data
  function getDailyProgress() {
    const walkData = getFitnessData("walk");
    const workoutData = getFitnessData("workout");
    const sleepData = getFitnessData("sleep");
    const waterData = getFitnessData("water");

    const walkProgress = walkData.count / walkData.goal;
    const waterProgress = waterData.count / waterData.goal;
    const workoutProgress = 
      (60*workoutData.count[0] + workoutData.count[1]) 
      / (60*workoutData.goal[0] + workoutData.goal[1]); 
    const sleepProgress =
      (60*sleepData.count[0] + sleepData.count[1]) 
      / (60*sleepData.goal[0] + sleepData.goal[1]); 

    return 0.25 * (walkProgress+waterProgress+workoutProgress+sleepProgress);
  }

  return <FitnessDataContext.Provider value={{
    fitnessData,
    getFitnessData,
    updateFitnessData,
    getDailyProgress
  }}>
    {children}
  </FitnessDataContext.Provider>
}