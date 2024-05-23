import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  numbers: number[];
  isGameActive: boolean;
  userGuess: number | null;
  correctSum: number;
}

const initialState: GameState = {
  numbers: [],
  isGameActive: false,
  userGuess: null,
  correctSum: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.isGameActive = true;
      const numbers = generateRandomNumbers();
      state.numbers = numbers;
      state.correctSum = numbers.reduce((sum, num) => sum + num, 0);
      state.userGuess = null;
    },
    addUserGuess(state, action: PayloadAction<number>) {
      state.userGuess = action.payload;
    },
    resetGame(state) {
      state.isGameActive = false;
      state.numbers = [];
      state.userGuess = null;
      state.correctSum = 0;
    },
  },
});

export const { startGame, addUserGuess, resetGame } = gameSlice.actions;
export default gameSlice.reducer;

function generateRandomNumbers(): number[] {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 11));
}