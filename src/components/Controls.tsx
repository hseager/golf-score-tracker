import React from 'react'

type ControlProps = {
  courses: Array<string>
  setCourses: Function
  holes: number
  setHoles: Function
}

const Controls = ({ courses, setCourses, holes, setHoles }: ControlProps) => {
  return (
    <div>
      <label>Course</label>
      <select>
        {courses.map((course, i) => (
          <option key={i}>{course}</option>
        ))}
      </select>

      <label>Holes</label>
      <input
        type="number"
        value={holes}
        onChange={(e) => {
          setHoles(parseInt(e.target.value))
        }}
        min={1}
        max={18}
      />
    </div>
  )
}

export default Controls
