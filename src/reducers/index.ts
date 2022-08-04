import { combineReducers } from 'redux'
import dialogs from './dialogs'
import checkedvalues from "./checkedvalues"
import setname from "./setname"
import checkedbenefit from './checkedbenefit'
import addresses from './addresses'
import password from './password'

export default combineReducers({
  dialogs,
  checkedvalues,
  setname,
  checkedbenefit,
  addresses,
  password
})
