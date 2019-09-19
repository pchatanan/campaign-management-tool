import { useSelector } from 'react-redux'

const useUid = () => {
  const uid = useSelector(state => state.global.authState.user.uid)
  return uid
}

export default useUid