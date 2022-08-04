const initialState = {
    first: '',
    second: '',
    city: '',
    zip: '',
  }
  
  const addresses = (state = initialState, action: { type: any; id: any; text: any }) => {
    switch (action.type) {
      case 'FIRST':
        return {
          ...state,
          first: action.text,
        }
      case 'SECOND':
        return {
          ...state,
          second: action.text
        }
      case 'CITY':
        return {
          ...state,
          city: action.text
        }
      case 'ZIP':
        return {
          ...state,
          zip: action.text
        }
      default:
        return state
    }
  }
  
  export default addresses