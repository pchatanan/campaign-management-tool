import { useSelector } from 'react-redux'

const useGameName = () => {
  const gameName = useSelector(state => state.createPage.gameName)
  return gameName ? gameName : ''
}

export default useGameName