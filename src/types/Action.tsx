import { ActionTypes } from './ActionTypes'
import Payload from './Payload'

export default interface Action {
  type: ActionTypes
  payload: Payload
}
