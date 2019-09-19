import { useSelector } from 'react-redux'

const useExistingCampaigns = () => {
  return useSelector(state => state.createPage.campaigns)
}

export default useExistingCampaigns