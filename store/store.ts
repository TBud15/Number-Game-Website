import { configureStore } from "@reduxjs/toolkit";
import gameOverOne from "./slices/guessNumberSumOverOne";
import gameBelowOne from "./slices/guessNumberSumBelowOne";

const store = configureStore({
  reducer: {
    gameOverOne: gameOverOne,
    gameBelowOne: gameBelowOne,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
