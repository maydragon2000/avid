const initialState = {
  index: 0
}

const dialogs = (state = initialState, action: { type: any; id: any; text: any }) => {
  switch (action.type) {
    case 'FIRST_STEP':
      return {
        ...state,
        index: 0,
      }
    case 'SECOND_STEP':
      return {
        ...state,
        index: 1,
      }
    case 'THIRD_STEP':
      return {
        ...state,
        index: 2,
      }
    case 'FORTH_STEP':
      return {
        ...state,
        index: 3,
      }
    case 'FIFTH_STEP':
      return {
        ...state,
        index: 4,
      }
    case 'SIXTH_STEP':
      return {
        ...state,
        index: 5,
      }
    case 'SEVENTH_STEP':
      return {
        ...state,
        index: 6,
      }
    case 'EIGHTH_STEP':
      return {
        ...state,
        index: 7,
      }
    default:
      return state
  }
}

export default dialogs