const initialState = {
    value: false
  }
  
  const checkedbenefit = (state = initialState, action: { type: any; id: any; text: any }) => {
    switch (action.type) {
        case 'SOCIAL_SECURITY':
            return {
                ...state,
                value: action.text,
            }
        case 'SUPPLEMENTARY':
            return {
                ...state,
                value: action.text
            }
        case 'VETARANS_COMPENSATION':
            return {
                ...state,
                value: action.text
            }
        case 'VETERANS_EDUCATION':
            return {
                ...state,
                value: action.text
            }
        case 'VETERANS_RESERVE':
            return {
                ...state,
                value: action.text
            }
        case 'VETERANS_LIFE':
            return {
                ...state,
                value: action.text
            }
        case 'VETERANS_VOCATIONAL':
            return {
                ...state,
                value: action.text
            }
        case 'FEDERAL_RETIREMENT':
            return {
                ...state,
                value: action.text
            }
        case 'FEDERAL_SURVIVOR':
            return {
                ...state,
                value: action.text
            }
        case 'RAILROAD_ANNUITY':
            return {
                ...state,
                value: action.text
            }
        case 'RAILROAD_SICKNESS':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_SOCIAL_SECURITY':
            return {
                ...state,
                value: action.text,
            }
        case 'Benefit_SUPPLEMENTARY':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_VETARANS_COMPENSATION':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_VETERANS_EDUCATION':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_VETERANS_RESERVE':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_VETERANS_LIFE':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_VETERANS_VOCATIONAL':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_FEDERAL_RETIREMENT':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_FEDERAL_SURVIVOR':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_RAILROAD_ANNUITY':
            return {
                ...state,
                value: action.text
            }
        case 'Benefit_RAILROAD_SICKNESS':
            return {
                ...state,
                value: action.text
            }
        default:
          return state
    }
  }
  
  export default checkedbenefit