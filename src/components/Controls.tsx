import React, { useState } from 'react'
import { ActionTypes } from '../types/ActionTypes'
import { saveCourse } from '../utils/localStorageManager'

type ControlProps = {
  course: string
  setCourse: Function
  courses: Array<string>
  holes: number
  dispatch: Function
}

const minHoles = 1
const maxHoles = 108
const addCourseValue = 'add-course'

const Controls = ({
  course,
  setCourse,
  courses,
  holes,
  dispatch,
}: ControlProps) => {
  const [courseName, setCourseName] = useState('')
  const [addingCourse, setAddingCourse] = useState(
    courses.length === 0 ? true : false
  )

  const handleHoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let holes = parseInt(event.target.value)
    if (holes < minHoles) holes = minHoles
    if (holes > maxHoles) holes = maxHoles
    dispatch({
      type: ActionTypes.UpdateHoles,
      payload: {
        value: holes,
      },
    })
  }

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === addCourseValue) {
      setAddingCourse(true)
    } else {
      setCourse(event.target.value)
    }
  }

  const handleAddCourse = () => {
    if (courseName.length > 0) {
      if (!courses.some((course) => course === courseName)) {
        dispatch({
          type: ActionTypes.AddCourse,
          payload: {
            value: courseName,
          },
        })
        setCourse(courseName)
        saveCourse(courseName)
      }
      setCourseName('')
      setAddingCourse(false)
    } else if (courses.length > 0 && courseName.length === 0) {
      setAddingCourse(false)
    }
  }

  return (
    <div className="bg-green-400 p-4 px-5 flex items-center border-b border-green-600">
      <div className="mr-4">
        <div className="flex items-center">
          {addingCourse && (
            <>
              <input
                type="text"
                placeholder="Add Course"
                className="text-sm bg-white p-2 rounded-l-md w-28 h-9 border border-slate-200 outline-none"
                onChange={(e) => {
                  setCourseName(e.target.value)
                }}
              />
              <button
                className="px-4 pb-1 h-9 bg-green-600 rounded-r-md"
                onClick={handleAddCourse}
              >
                +
              </button>
            </>
          )}
          {!addingCourse && (
            <select
              className="text-sm bg-white p-2 h-9 w-36 rounded-md border border-slate-200"
              onChange={handleCourseChange}
              value={course}
            >
              {courses.map((name, i) => (
                <option key={i}>{name}</option>
              ))}
              <option value={addCourseValue}>Add Course</option>
            </select>
          )}
        </div>
      </div>
      <div>
        <label className="text-sm mr-3">Holes:</label>
        <input
          type="number"
          className="w-16 p-1 rounded-md text-center border border-slate-200"
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
