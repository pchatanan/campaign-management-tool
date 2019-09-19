import { useSelector } from 'react-redux'

const usePage = () => {
  return useSelector(state => state.createPage.page)
}

export default usePage