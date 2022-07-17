import { createStore } from "redux"
import { ageReducer } from './ageReducer'
export const initState = {
    name: 'quang hung',
    age: 20,
    description: ''
}

export const configureStore = () => {
    const store = createStore(ageReducer, initState);
    return store;
}