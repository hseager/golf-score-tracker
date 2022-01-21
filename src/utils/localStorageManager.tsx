import Score from '../types/Score'

export const saveCourse = (course: String) => {
  const courses = getCourses()
  courses.push(course)
  localStorage.courses = courses
}

export const getCourses = () => {
  return localStorage.courses ? JSON.parse(localStorage.courses) : []
}
