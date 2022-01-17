import React, { ChangeEvent } from 'react'
import { ActionTypes } from '../types/ActionTypes'

type ControlProps = {
  courses: Array<string>
  holes: number
  dispatch: Function
}

const minHoles = 1
const maxHoles = 18

const Controls = ({ courses, holes, dispatch }: ControlProps) => {
  const handleHoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.UpdateHoles,
      payload: {
        value: parseInt(event.target.value),
      },
    })
  }

  return (
    <div>
      {courses.length > 0 && (
        <>
          <label>Course</label>
          <select>
            {courses.map((course, i) => (
              <option key={i}>{course}</option>
            ))}
          </select>
        </>
      )}

      <label>Holes</label>
      <input
        type="number"
        value={holes}
        onChange={handleHoleChange}
        min={minHoles}
        max={maxHoles}
      />
    </div>
  )
}

export default Controls
