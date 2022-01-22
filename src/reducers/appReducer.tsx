import AppState from '../types/AppState'
import { ActionTypes } from '../types/ActionTypes'
import Action from '../types/Action'
import { getCourses, getCurrentScoreCard } from '../utils/localStorageManager'

const defaultHoles = 18

const generateScoreCard = (startingHole: number, holes: number) => {
  let scoreCard = []
  for (let i = startingHole; i < startingHole + holes; i++) {
    scoreCard.push({
      hole: i,
      par: 3,
      score: 0,
    })
  }
  return scoreCard
}

export const initialState: AppState = {
  holes: getCurrentScoreCard() ? getCurrentScoreCard().length : defaultHoles,
  courses: getCourses(),
  scoreCard: getCurrentScoreCard() || generateScoreCard(1, defaultHoles),
}

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionTypes.Update:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }
    case ActionTypes.UpdateHoles:
      if (action.payload.value < state.holes) {
        const difference = state.holes - action.payload.value
        return {
          ...state,
          holes: action.payload.value,
          scoreCard: [
            ...state.scoreCard.slice(0, state.scoreCard.length - difference),
          ],
        }
      } else if (action.payload.value > state.holes) {
        const difference = action.payload.value - state.holes
        return {
          ...state,
          holes: action.payload.value,
          scoreCard: [
            ...state.scoreCard.concat(
              generateScoreCard(state.holes + 1, difference)
            ),
          ],
        }
      }
    case ActionTypes.UpdatePar:
      return {
        ...state,
        scoreCard: state.scoreCard.map((score) =>
          score.hole === action.payload.key
            ? { ...score, par: action.payload.value }
            : score
        ),
      }
    case ActionTypes.UpdateScore:
      return {
        ...state,
        scoreCard: state.scoreCard.map((score) =>
          score.hole === action.payload.key
            ? { ...score, score: action.payload.value }
            : score
        ),
      }
    case ActionTypes.AddCourse:
      return {
        ...state,
        courses: [...state.courses, action.payload.value],
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}
