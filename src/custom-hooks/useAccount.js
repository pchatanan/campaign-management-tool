import { useSelector } from 'react-redux'

const useAccount = () => {
  return useSelector(state => state.createPage.account)
}

export default useAccount