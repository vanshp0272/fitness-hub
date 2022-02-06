import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const FitnessDataContext = React.createContext();

export function useFitnessData() {
  return useContext(fitnessDataContext);
}

export const FitnessDataProvider = ({ children }) => {
  // Custom hook to handle local storage items
  const [fitnessData, setFitnessData] = useLocalStorage("fitnessData", []);

  // === FUNCTIONS TO CREATE, READ AND UPDATE FITNESS DATA ===

  // Get fitness data based on name, i.e. "walk"
  function getFitnessData(name) {
    return fitnessData.filter(data => data.name === name);
  }

  // Update count or goal of fitness data with given name
  function updateFitnessData(name, { count=null, goal=null}) {
    setFitnessData(previousData => {
      [...previousData, ]
    });
  }

  return <FitnessDataContext.Provider value={{
    fitnessData,
    getFitnessData
  }}>
    {children}
  </FitnessDataContext.Provider>
}