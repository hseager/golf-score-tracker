import Score from './Score'

export default interface AppState {
  holes: number
  courses: Array<string>
  scoreCard: Array<Score>
}
