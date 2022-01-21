import React, { useState } from 'react'

type SaveScoreProps = {
  course: string
}

const courseErrorMessage = 'Please select a course'

const SaveScore = ({ course }: SaveScoreProps) => {
  const [error, setError] = useState('')

  const saveScore = () => {
    if (course) {
      setError('')
    } else {
      setError(courseErrorMessage)
    }
  }

  return (
    <div className="m-4">
      {error && (
        <div className="mb-4 bg-orange-200 py-2 px-4 rounded-md text-orange-900 border border-orange-300">
          <p>{error}</p>
        </div>
      )}
      <button
        className="px-6 py-2 bg-green-400 rounded-md border-b border-green-600 active:border-t active:border-b-0"
        onClick={saveScore}
      >
        Save
      </button>
    </div>
  )
}

export default SaveScore
