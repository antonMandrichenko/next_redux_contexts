import { PayloadAction } from "@reduxjs/toolkit";
import createSliceState from "./common/createSliceState";
import { ClientTestService } from "../services/clientTestService";

export default createSliceState({
  name: "data",
  initialState: { items: [] } as {items: string[]},
  reducers: {
    set: (state, action) => action.payload,
  },
  effects: {
    get: async (state) => {
      console.log('get')
      const client = await ClientTestService.initialize();
      const data = await client.getData();
      return {items: data};
    },
  },
});
