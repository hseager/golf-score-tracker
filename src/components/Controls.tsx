import React, { useState } from 'react'
import { ActionTypes } from '../types/ActionTypes'
import { saveCourse } from '../utils/localStorageManager'
import Menu from '../components/Menu'

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
    let holes = parseInt(event.target.value, 10)
    if (holes < minHoles || !holes) holes = 0
    if (holes > maxHoles) holes = maxHoles
    dispatch({
      type: ActionTypes.UpdateHoles,
      payload: {
        value: holes,
      },
    })
  }

  const handleHolesBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    let holes = parseInt(event.target.value, 10)
    if (!holes) holes = minHoles
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
    <div className="bg-amber-100 py-4 border-b border-amber-300">
      <div className="max-w-2xl mx-auto flex items-center px-4 justify-between">
        <div className="flex">
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
                    className="px-4 pb-1 h-9 bg-green-400 rounded-r-md"
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
              value={holes.toString()}
              onChange={handleHoleChange}
              onBlur={handleHolesBlur}
              min={minHoles}
              max={maxHoles}
            />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Controls
