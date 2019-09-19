import { useSelector } from 'react-redux'

const useAgeMin = () => {
  const ageMin = useSelector(state => state.createPage.ageMin)
  return ageMin ? ageMin : ''
}

export default useAgeMin