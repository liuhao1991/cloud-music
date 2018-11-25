const hotsongs = (state = {}, action) => {
  if (action.type === 'INIT_HOTSONGS') {
    return {
      ...state,
      ...action.payload
    }
  }
  return state;
}

export default hotsongs;