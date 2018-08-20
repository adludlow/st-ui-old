export const loadState = (stateId) => {
  try {
    const serialisedState = localStorage.getItem(stateId);
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (stateId, state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(stateId, serialisedState);
  } catch (error) {
  }
};