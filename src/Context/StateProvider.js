import React, { createContext, useContext, useReducer } from 'react';

//preparing the context
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        { children }
    </StateContext.Provider>
); 

const useStatValue = () => useContext(StateContext);

export default useStatValue;