import { useSelector } from 'react-redux'

const useIg = () => {
  return useSelector(state => state.createPage.ig)
}

export default useIg