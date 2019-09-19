import { useSelector } from 'react-redux'

const useApp = () => {
  return useSelector(state => state.createPage.app)
}

export default useApp