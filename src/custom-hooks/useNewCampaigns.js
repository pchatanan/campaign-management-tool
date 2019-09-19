import { useSelector } from 'react-redux'

const useNewCampaigns = () => {
  return useSelector(state => state.createPage.newCampaigns)
}

export default useNewCampaigns