import { useSelector } from 'react-redux'

const useNewAdSets = () => {
  return useSelector(state => state.createPage.newAdSets)
}

export default useNewAdSets