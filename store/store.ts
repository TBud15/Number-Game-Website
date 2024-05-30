import { configureStore } from "@reduxjs/toolkit";
import gameLevelOne from "./slices/guessNumberLevelOne";
import userGameStatistics from "./slices/userGameStatistics";

const store = configureStore({
  reducer: {
    game: gameLevelOne,
    userGameStatistics: userGameStatistics,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
