import React, { ChangeEvent } from 'react'
import { ActionTypes } from '../types/ActionTypes'

type ControlProps = {
  courses: Array<string>
  holes: number
  dispatch: Function
}

const minHoles = 1
const maxHoles = 108

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
    <div className="bg-green-400 p-4 px-5 flex items-center border-b border-green-600">
      <div className="mr-4">
        <label className="text-sm mr-3">Course:</label>
        <select className="text-sm bg-white p-2 rounded-md">
          {courses.map((course, i) => (
            <option key={i}>{course}</option>
          ))}
          <option value={0}>Add Course</option>
        </select>
      </div>
      <div>
        <label className="text-sm mr-3">Holes:</label>
        <input
          type="number"
          className="w-16 p-1 rounded-md text-center"
          value={holes}
          onChange={handleHoleChange}
          min={minHoles}
          max={maxHoles}
        />
      </div>
    </div>
  )
}

export default Controls
