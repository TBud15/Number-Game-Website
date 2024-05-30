// Load the last visit timestamp from local storage
export const loadLastVisit = () => {
  try {
    const lastVisit = localStorage.getItem("lastVisit");
    return lastVisit ? new Date(lastVisit) : null;
  } catch (err) {
    return null;
  }
};

// Save the last visit timestamp to local storage
export const saveLastVisit = () => {
  try {
    const now = new Date().toISOString();
    localStorage.setItem("lastVisit", now);
  } catch (err) {
    console.log(err);
  }
};
