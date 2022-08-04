const initialState = {
    first: '',
    confirm: '',
  }
  
  const password = (state = initialState, action: { type: any; id: any; text: any }) => {
    switch (action.type) {
      case 'FIRST_PASSWORD':
        return {
          ...state,
          first: action.text,
        }
      case 'CONFIRM_PASSWORD':
        return {
          ...state,
          confirm: action.text
        }
      default:
        return state
    }
  }
  
  export default password