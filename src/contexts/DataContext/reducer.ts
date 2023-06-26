import { DataActions, DataContextProps, DataContextTypes } from "./types";

export const initDataState: DataContextProps = {
  data: [],
};

export function DataReducer(state: DataContextProps, action: DataActions) {
  switch (action.type) {
    case DataContextTypes.SET_DATA: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
}
