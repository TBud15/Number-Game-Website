import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserGameStatistics {
  someProperty: string;
  someValue: number;
}

const initialState: UserGameStatistics = {
  someProperty: "",
  someValue: 0,
};

const anotherGameModeSlice = createSlice({
  name: "anotherGameMode",
  initialState,
  reducers: {
    startAnotherGameMode(state) {
      // Logic for starting another game mode
    },
    updateSomeProperty(state, action: PayloadAction<string>) {
      state.someProperty = action.payload;
    },
    updateSomeValue(state, action: PayloadAction<number>) {
      state.someValue = action.payload;
    },
  },
});

export const { startAnotherGameMode, updateSomeProperty, updateSomeValue } =
  anotherGameModeSlice.actions;
export default anotherGameModeSlice.reducer;
