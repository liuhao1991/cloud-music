const recommends = (state = [], action) => {
  if (action.type === 'INIT_RECOMMEND' && !state.length) {
    return [
      ...state,
      ...action.payload
    ]
  }
  return state;
}

export default recommends;