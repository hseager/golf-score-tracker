import Score from '../types/Score'

export const saveCourse = (course: string) => {
  const courses = getCourses()
  courses.push(course)
  localStorage.courses = JSON.stringify(courses)
}

export const getCourses = () => {
  return localStorage.courses ? JSON.parse(localStorage.courses) : []
}
