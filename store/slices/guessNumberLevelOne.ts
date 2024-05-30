import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getTotalGamesPlayed,
  loadLastVisit,
  saveLastVisit,
} from "../../utils/localStorage";
import { increaseTotalGamesPlayed } from "../../utils/localStorage";

interface GameState {
  numbers: number[];
  isGameActive: boolean;
  gameButtonClicked: boolean;
  userGuess: number | null;
  correctSum: number;
  timer: number;
  arrayLength: number;
  numberRange: number;
  allDisplayed: boolean;
  lastVisit: Date | null;
}

const initialState: GameState = {
  numbers: [],
  isGameActive: false,
  gameButtonClicked: false,
  userGuess: null,
  correctSum: 0,
  timer: 2000, // displayed in milliseconds
  arrayLength: 5, // array length
  numberRange: 9, // default number range. 9 is 1-9, 99 is 1-99 etc
  allDisplayed: false, // all numbers are displayed or no
  lastVisit: loadLastVisit(),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.isGameActive = true;
      state.gameButtonClicked = true;
      const numbers = generateRandomNumbers(
        state.arrayLength,
        state.numberRange
      );
      state.numbers = numbers;
      state.correctSum = numbers.reduce((sum, num) => sum + num, 0);
      state.userGuess = null;
      saveLastVisit(); //lastVisit local storage
      increaseTotalGamesPlayed(); //total games played local storage
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
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    setArrayLength: (state, action: PayloadAction<number>) => {
      state.arrayLength = action.payload;
    },
    setNumberRange: (state, action: PayloadAction<number>) => {
      state.numberRange = action.payload;
    },
    setAllDisplayed: (state, action: PayloadAction<boolean>) => {
      state.allDisplayed = action.payload;
    },
  },
});

export const {
  startGame,
  addUserGuess,
  resetGame,
  setTimer,
  setArrayLength,
  setNumberRange,
  setAllDisplayed,
} = gameSlice.actions;
export default gameSlice.reducer;

function generateRandomNumbers(
  arrayLength: number,
  numberRange: number
): number[] {
  return Array.from(
    { length: arrayLength },
    () => Math.floor(Math.random() * numberRange) + 1
  );
}
