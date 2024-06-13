import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loadLastVisit,
  saveLastVisit,
} from "../../utils/statisticsLocalStorage";
import { increaseTotalGamesPlayed } from "../../utils/statisticsLocalStorage";

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
  timer: 1000, // displayed in milliseconds
  arrayLength: 5, // array length
  numberRange: 9, // default number range. 9 is -9 to 9 excluding 0, 99 is -99 to 99 excluding 0, etc
  allDisplayed: false, // all numbers are displayed or no
  lastVisit: loadLastVisit(),
};

const gameSlice = createSlice({
  name: "gameBelowOne",
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

      // Log the numbers array and check for negative numbers
      console.log("Generated numbers array: ", numbers);
      console.log(
        "Includes negative numbers: ",
        numbers.some((num) => num < 0)
      );

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

const generateRandomNumbers = (
  arrayLength: number,
  numberRange: number
): number[] => {
  let range = Math.abs(numberRange);
  return Array.from({ length: arrayLength }, () => {
    let num;
    do {
      num = Math.floor(Math.random() * (range * 2 + 1)) - range;
    } while (num === 0);
    return num;
  });
};
