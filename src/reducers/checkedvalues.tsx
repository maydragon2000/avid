const initialState = {
  value: false
}

const checkedvalues = (state = initialState, action: { type: any; id: any; text: any }) => {
  switch (action.type) {
    case 'CHECKED_VALUE':
      return {
        ...state,
        value: action.text,
      }
    case 'CHECK_VALUE':
      return {
        ...state,
        value: action.text,
      }
    default:
      return state
  }
}

export default checkedvalues