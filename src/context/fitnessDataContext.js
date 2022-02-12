import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FitnessDataContext = React.createContext();

export function useFitnessData() {
  return useContext(FitnessDataContext);
}

// Array of objects describing each type of fitness card
export const cardInformation = [
  {
    name: "walk",
    color: "green",
    units: "km",
    unitStep: 0.1,
    measure: "distance",
    defaultGoal: 5,
    doubleInput: false
  },
  {
    name: "workout",
    color: "orange",
    units: "hrs",
    unitStep: 1,
    measure: "time",
    defaultGoal: [2,0],
    doubleInput: true
  },
  {
    name: "water",
    color: "blue",
    units: "glasses",
    unitStep: 1,
    measure: "glass",
    defaultGoal: 8,
    doubleInput: false
  },
  {
    name: "sleep",
    color: "purple",
    units: "hrs",
    unitStep: 1,
    measure: "time",
    defaultGoal: [8,0],
    doubleInput: true
  }
];

export const FitnessDataProvider = ({ children }) => {
  // Get archived data
  const [archivedData, setArchivedData] = useLocalStorage("archivedData", []);

  // Set fitnessData to local storage value, else to default data
  const defaultData = [];
  cardInformation.forEach(cardData => {
    const card = {};
    card.name = cardData.name;
    card.date = new Date();
    card.count = cardData.doubleInput ? [0,0] : 0;
    card.goal = cardData.defaultGoal;

    defaultData.push(card);
  });
  const [fitnessData, setFitnessData] = useLocalStorage("fitnessData", defaultData);

  // === FUNCTIONS TO CREATE, READ AND UPDATE FITNESS DATA ===

  // Reset counters to 0 each day
  function resetDailyData() {
    // Get previous goals to reuse them
    const previousGoals = {};
    cardInformation.forEach(card => {
      previousGoals[card.name] = getFitnessData(card.name).goal;
    });

    // Generate an archive
    const globalProgress = getDailyProgress();
    archiveData(globalProgress);

    // Delete data
    cardInformation.forEach(card => {
      deleteFitnessData(card.name);
    });

    // Create new data object and set it as current fitness data
    const newDataArray = [];
    cardInformation.forEach(card => {
      const newFitnessData = {};
      newFitnessData.name = card.name;
      newFitnessData.date = new Date();
      newFitnessData.count = card.doubleInput ? [0,0] : 0;
      newFitnessData.goal = previousGoals[card.name];
      
      newDataArray.push(newFitnessData);
    })
    setFitnessData(newDataArray);
  }

  // Get fitness data based on name, i.e. "walk"
  function getFitnessData(name) {
    return fitnessData.find(data => data.name === name);
  }

  // Delete current day fitness data with given name
  function deleteFitnessData(name) {
    setFitnessData(previousData => {
      return previousData.filter(data => data.name !== name);
    });
  }

  // Update count or goal of fitness data with given name
  function updateFitnessData(name, { count, goal }) {
    deleteFitnessData(name);
    // Create new data item and append to fitnessData
    const newData = {
      name: name,
      date: new Date(),
      count: count,
      goal: goal
    };

    setFitnessData(previousData => {
      return [...previousData, newData]
    });
  }

  // Return the global progress combining each card data
  function getDailyProgress() {
    const progressArray = []; // Array to store each category's progress
    cardInformation.forEach(card => {
      const cardFitnessData = getFitnessData(card.name);
      const cardFitnessProgress = card.doubleInput ? (
        (60 * parseInt(cardFitnessData.count[0]) + parseInt(cardFitnessData.count[1]))
        / (60 * parseInt(cardFitnessData.goal[0]) + parseInt(cardFitnessData.goal[1]))
      ) : (
        cardFitnessData.count / cardFitnessData.goal
      );

      progressArray.push(cardFitnessProgress);
    });    

    const progress = progressArray.reduce((total, num) => total += num, 0);

    return progress * 0.25;
  }

  // Create an archive object and save it to local storage
  function archiveData(globalProgress) {
    const newArchive = {
      date: getFitnessData("walk").date,
      walkCount: getFitnessData("walk").count,
      walkGoal: getFitnessData("walk").goal,
      workoutCount: getFitnessData("workout").count,
      workoutGoal: getFitnessData("workout").goal,
      waterCount: getFitnessData("water").count,
      waterGoal: getFitnessData("water").goal,
      sleepCount: getFitnessData("sleep").count,
      sleepGoal: getFitnessData("sleep").goal,
      globalProgress: globalProgress
    };

    setArchivedData(previousData => {
      return [...previousData, newArchive];
    });
  }

  return <FitnessDataContext.Provider value={{
    fitnessData,
    archivedData,
    getFitnessData,
    updateFitnessData,
    getDailyProgress,
    resetDailyData
  }}>
    {children}
  </FitnessDataContext.Provider>
}