import React, { useContext } from 'react';

const FitnessDataContext = React.createContext();

export function useFitnessData() {
  return useContext(fitnessDataContext);
}

export const FitnessDataProvider = ({ children }) => {

  const [fitnessData, setFitnessData] = useState();

  return <FitnessDataContext.Provider value={{
    fitnessData
  }}>
    {children}
  </FitnessDataContext.Provider>
}