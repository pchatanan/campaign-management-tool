import { useSelector } from 'react-redux'

const useCountry = () => {
  const country = useSelector(state => state.createPage.country)
  return country ? country : ''
}

export default useCountry