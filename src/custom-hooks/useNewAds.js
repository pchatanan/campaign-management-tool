import { useSelector } from 'react-redux'

const useNewAds = () => {
  return useSelector(state => state.createPage.newAds)
}

export default useNewAds