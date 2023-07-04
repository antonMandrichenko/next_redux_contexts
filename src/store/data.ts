import createSliceState from "./common/createSliceState";
import { ClientTestService } from "../services/clientTestService";

export default createSliceState({
  name: "data",
  initialState: { items: [], item: "" } as { items: string[]; item: string },
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
    setItem: (state, action) => {
      return action.payload;
    },
  },
  effects: {
    get: async (state) => {
      const client = await ClientTestService.initialize();
      const data = await client.getData();
      return { ...state, items: data };
    },
  },
});
