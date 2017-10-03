export const loadState = () =>{
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; /*To let reducers to take care the store*/
  }

};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore white space error
  }
};