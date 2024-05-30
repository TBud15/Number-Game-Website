import { configureStore } from "@reduxjs/toolkit";
import gameLevelOne from "./slices/guessNumberLevelOne";
import UserGameStatistics from "./slices/UserGameStatistics";

const store = configureStore({
  reducer: {
    game: gameLevelOne,
    UserGameStatistics: UserGameStatistics,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
