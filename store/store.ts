import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import anotherGameModeReducer from "./slices/anotherGameModeSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    anotherGameMode: anotherGameModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
