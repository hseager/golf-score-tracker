import Score from '../types/Score'

export const saveCourse = (course: string) => {
  const courses = getCourses()
  courses.push(course)
  localStorage.courses = JSON.stringify(courses)
}

export const getCourses = () => {
  return localStorage.courses ? JSON.parse(localStorage.courses) : []
}

export const saveCurrentScoreCard = (scoreCard: Array<Score>) => {
  localStorage.currentScoreCard = JSON.stringify(scoreCard)
}

export const getCurrentScoreCard = () => {
  return localStorage.currentScoreCard
    ? JSON.parse(localStorage.currentScoreCard)
    : null
}

export const saveGame = (course: String, scoreCard: Array<Score>) => {
  const game = {
    date: new Date(),
    course,
    scoreCard,
  }
  const games = getGames()
  games.push(game)
  localStorage.games = JSON.stringify(games)
}

export const getGames = () => {
  return localStorage.games ? JSON.parse(localStorage.games) : []
}
