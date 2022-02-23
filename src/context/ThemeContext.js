import { createContext, useReducer } from "react";
// Dont forget if using this to wrap this around the <App /> in index.js
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // This will update the initial state with a new new state
  const themeReducer = (state, action) => {
    switch (action.type) {
      case "CHNAGE_COLOR":
        return { ...state, color: action.payload };

      default:
        return state;
    }
  };

  // dispatch function invokes themeReducer
  const changeColor = color => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  // state: is the initial state of the useRecuder function && dispatch: invokes the useReducer themeReducer function
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue",
    mode: "dark",
  });
  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
