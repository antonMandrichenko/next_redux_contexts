import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";
import { DataContextProps, DataContextTypes } from "./types";
import { DataReducer, initDataState } from "./reducer";

const actionsList = {};

const DataStateContext = React.createContext<DataContextProps>({
  ...initDataState,
});

const DataActionsContext = React.createContext(actionsList);

type DataProviderProps = {
  data: string[];
};

const DataProvider: React.FC<PropsWithChildren<DataProviderProps>> = ({
  children,
  data,
}) => {
  const [state, dispatch] = React.useReducer(DataReducer, initDataState);


  useEffect(() => {
    dispatch({ type: DataContextTypes.SET_DATA, payload: { data } });
  }, [data]);

  const value = useMemo(() => state, [state]);

  const actions = useMemo(() => ({}), []);

  return (
    <DataActionsContext.Provider value={actions}>
      <DataStateContext.Provider value={value}>
        {children}
      </DataStateContext.Provider>
    </DataActionsContext.Provider>
  );
};

function useDataState() {
  const context = React.useContext(DataStateContext);
  if (context === undefined) {
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
}
function useDataActions() {
  const context = React.useContext(DataActionsContext);
  if (context === undefined) {
    throw new Error("useDataActions must be used within a DataProvider");
  }
  return context;
}

export default DataProvider;

export { useDataState, useDataActions };
