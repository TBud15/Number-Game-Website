//Last visit add
export const saveLastVisit = () => {
  try {
    const now = new Date().toISOString();
    localStorage.setItem("lastVisit", now);
  } catch (err) {
    console.log(err);
  }
};

//Last visit GET
export const loadLastVisit = () => {
  try {
    const lastVisit = localStorage.getItem("lastVisit");
    return lastVisit ? new Date(lastVisit) : null;
  } catch (err) {
    return null;
  }
};

//Total games played increase
export const increaseTotalGamesPlayed = () => {
  try {
    const gamesNow = localStorage.getItem("totalGamesPlayed"); // Retrieve the current value from local storage
    const newGamesCount = gamesNow ? parseInt(gamesNow, 10) + 1 : 1; // convert to number from string, increment it, or start at 1 if null
    localStorage.setItem("totalGamesPlayed", newGamesCount.toString()); //Save new value back to local storage as a string
  } catch (err) {
    console.log(err); //console log any errors
  }
};

//Total games played GET
export const getTotalGamesPlayed = (): number => {
  try {
    const gamesNow = localStorage.getItem("totalGamesPlayed"); // Retrieve the current value from local storage
    return gamesNow ? parseInt(gamesNow, 10) : 0; // Parse the string to a number, or return 0 if null
  } catch (err) {
    console.log(err); // Log any errors
    return 0;
  }
};

//Correct Answers Increase
export const increaseCorrectAnswers = () => {
  try {
    const correctAnswersNow = localStorage.getItem("correctAnswers");

    const newCorrectAnswers = correctAnswersNow
      ? parseInt(correctAnswersNow, 10) + 1
      : 1;

    localStorage.setItem("correctAnswers", newCorrectAnswers.toString());
  } catch (err) {
    console.log(err);
  }
};

//Correct Answers GET
export const getCorrectAnswers = () => {
  try {
    const correctAnswers = localStorage.getItem("correctAnswers"); // Rettive correct answers from local storage

    return correctAnswers ? parseInt(correctAnswers, 10) : 0;
  } catch (err) {
    console.log(err);
  }
};

//Increase incorrect answers
export const increaseIncorrectAnswers = () => {
  try {
    const incorrectAnswersNow = localStorage.getItem("incorrectAnswers");

    const newIncorrectAnswers = incorrectAnswersNow
      ? parseInt(incorrectAnswersNow, 10) + 1
      : 1;

    localStorage.setItem("incorrectAnswers", newIncorrectAnswers.toString());
  } catch (err) {
    console.log(err);
  }
};

//Incorrect answers GET
export const getIncorrectAnswers = () => {
  try {
    const incorrectAnswers = localStorage.getItem("incorrectAnswers");

    return incorrectAnswers ? parseInt(incorrectAnswers, 10) : 0;
  } catch (err) {
    console.log(err);
  }
};

//Reset all statistics
export const ResetLocalStorageStatistics = () => {
  try {
    localStorage.setItem("incorrectAnswers", "0");
    localStorage.setItem("correctAnswers", "0");
    localStorage.setItem("totalGamesPlayed", "0");
  } catch (err) {
    console.log(err);
  }
};
