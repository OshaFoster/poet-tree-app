 import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getWords: null,
  setWords: ['words']
})

export const AppDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  words: []
})

/* ------------- Selectors ------------- */

export const AppDataSelectors = {
  selectWords: state => state.appData.words
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const setWords = (state, action) => {
  const { words } = action
  return state.merge({ words })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WORDS]: setWords,
})
