import { useSelector } from 'react-redux'

const useDefaultSetting = () => {
  const defaultSetting = useSelector(state => state.createPage.defaultSetting)
  return defaultSetting
}

export default useDefaultSetting