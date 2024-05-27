import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  numbers: number[];
  isGameActive: boolean;
  gameButtonClicked: boolean;
  userGuess: number | null;
  correctSum: number;
  timer: number;
}

const initialState: GameState = {
  numbers: [],
  isGameActive: false,
  gameButtonClicked: false,
  userGuess: null,
  correctSum: 0,
  timer: 2000, //displayed in milliseconds
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.isGameActive = true;
      state.gameButtonClicked = true;
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
      state.gameButtonClicked = false;
      state.numbers = [];
      state.userGuess = null;
      state.correctSum = 0;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { startGame, addUserGuess, resetGame, setTimer } =
  gameSlice.actions;
export default gameSlice.reducer;

function generateRandomNumbers(): number[] {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 9) + 1);
}
