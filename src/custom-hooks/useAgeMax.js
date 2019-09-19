import { useSelector } from 'react-redux'

const useAgeMax = () => {
  const ageMax = useSelector(state => state.createPage.ageMax)
  return ageMax ? ageMax : ''
}

export default useAgeMax