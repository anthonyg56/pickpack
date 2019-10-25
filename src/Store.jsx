import React, {useState, useMemo, useContext} from 'react'

function makeStore() {
    // Make a context for the store
    const Context = React.createContext();
  
    // Make a provider that takes an initialValue
    const Provider = ({ initialValue, children }) => {
      // Make a new state instance (could even use immer here!)
      const [state, setState] = useState(initialValue);
      // Memoize the context value to update when the state does
      const contextValue = useMemo(() => [state, setState], [state]);
  
      // Provide the store to children
      return <Context.Provider value={contextValue}>{children}</Context.Provider>;
    };
  
    // A hook to help consume the store
    const useStore = () => useContext(Context);
  
    return { Provider, useStore };
}

const {Provider, useStore} = makeStore();

export {
    Provider,
    useStore
}