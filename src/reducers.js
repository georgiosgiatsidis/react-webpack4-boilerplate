import { combineReducers } from 'redux'
import home from './containers/HomePage/reducer';
const root = combineReducers({
    home,
})

export default root
