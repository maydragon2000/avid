const initialState = {
  firstName: '',
  lastName: '',
  beneficiary_customfirstName: '',
  beneficiary_customlastName: '',
  beneficiary_ssn: '',
  beneficiary_firstname: '',
  beneficiary_lastname: ''
}

const setname = (state = initialState, action: { type: any; id: any; text: any }) => {
  switch (action.type) {
    case 'FIRSTNAME':
      return {
        ...state,
        firstName: action.text,
      }
    case 'LASTNAME':
      return {
        ...state,
        lastName: action.text
      }
    case 'BENEFICIARY_FIRSTNAME':
      return {
        ...state,
        beneficiary_firstName: action.text
      }
    case 'BENEFICIARY_LASTNAME':
      return {
        ...state,
        beneficiary_lastName: action.text
      }
    case 'BENEFICIARY_CUSTOMFIRSTNAME':
      return {
        ...state,
        beneficiary_customfirstName: action.text
      }
    case 'BENEFICIARY_CUSTOMLASTNAME':
      return {
        ...state,
        beneficiary_customlastName: action.text
      }
    case 'BENEFICIARY_SSN':
      return {
        ...state,
        beneficiary_ssn: action.text
      }
    default:
      return state
  }
}

export default setname