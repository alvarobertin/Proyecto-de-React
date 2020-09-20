export const setAnimal = (animal) => (dispatch) => {
  dispatch({
    type: 'SET_ANIMAL',
    payload: { animal }
  });
}

export const setAnimalDidMount = (animal) => (dispatch) => {
  dispatch({
    type: 'SET_ANIMALDidMount',
    payload: { animal }
  });
}
