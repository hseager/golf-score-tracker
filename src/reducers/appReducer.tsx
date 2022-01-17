import AppState from '../types/AppState'
import { ActionTypes } from '../types/ActionTypes'
import Action from '../types/Action'

const defaultHoles = 18

const generateScores = (holes: number) => {
  let scores = []
  for (let i = 1; i <= holes; i++) {
    scores.push({
      hole: i,
      par: 3,
      score: 0,
    })
  }
  return scores
}

export const initialState: AppState = {
  holes: defaultHoles,
  courses: [],
  scores: generateScores(defaultHoles),
}

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionTypes.Update:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }
    case ActionTypes.UpdateHoles:
      return {
        ...state,
        holes: action.payload.value,
        scores: generateScores(action.payload.value),
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
