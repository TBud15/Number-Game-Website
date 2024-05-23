import { configureStore } from "@reduxjs/toolkit";
import gameLevelOne from "./slices/guessNumberLevelOne";
import anotherGameModeReducer from "./slices/anotherGameModeSlice";

const store = configureStore({
  reducer: {
    game: gameLevelOne,
    anotherGameMode: anotherGameModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
