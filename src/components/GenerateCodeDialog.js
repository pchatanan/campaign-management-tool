import React from 'react'
import withDialog from '../common/withDialog';
import useNewCampaigns from '../custom-hooks/useNewCampaigns';
import useNewAdSets from '../custom-hooks/useNewAdSets';
import useNewAds from '../custom-hooks/useNewAds';
import usePage from '../custom-hooks/usePage';
import useApp from '../custom-hooks/useApp';
import useAgeMin from '../custom-hooks/useAgeMin';
import { checkNested, exportToCsv } from '../common/utils';
import useCountry from '../custom-hooks/useCountry';
import useIg from '../custom-hooks/useIg';
import useAgeMax from '../custom-hooks/useAgeMax';
import { Button } from '../ui';

const columns = [
  'Campaign Name',
  'Campaign Status',
  'Campaign Objective',
  'Buying Type',
  'Campaign Bid Strategy',
  'Campaign Lifetime Budget',
  'User Operating System',
  'Ad Set Run Status',
  'Ad Set Name',
  'Ad Set Schedule',
  'Ad Set Time Start',
  'Ad Set Time Stop',
  'Link Object ID',
  'Application ID',
  'Instagram Account ID',
  'Link',
  'Gender',
  'Age Min',
  'Age Max',
  'Countries',
  'Location Types',
  'Flexible Inclusions',
  'Custom Audiences',
  'Ad Name',
  'Ad Status',
  'Creative Type',
  'Image Hash',
  'Video ID',
  'Video Thumbnail URL',
  'Call to Action',
  'Title',
  'Body',
  'Link Description'
]

const USER_PLATFORMS = ['AND', 'IOS']

const GenerateCodeDialog = props => {
  const newCampaigns = useNewCampaigns()
  const newAdSets = useNewAdSets()
  const newAds = useNewAds()

  const page = usePage()
  const app = useApp()
  const ig = useIg()
  const ageMin = useAgeMin()
  const ageMax = useAgeMax()
  const country = useCountry()


  const getAllRows = () => {
    var rows = []
    rows.push(columns)

    var allAds = []
    // New Campaign
    newCampaigns.forEach(newCampaign => {
      // User Platform
      USER_PLATFORMS.forEach(userPlatform => {
        if ((userPlatform === 'AND' && newCampaign.isAND) || (userPlatform === 'IOS' && newCampaign.isIOS))
          // New Ad Set
          newAdSets.forEach(newAdSet => {
            // New Ad
            newAds.forEach(newAd => {
              const temp = {}
              const finalCampaignName = `${userPlatform}${newCampaign.name}`
              temp['Campaign Name'] = finalCampaignName
              temp['Campaign Status'] = newCampaign.status
              temp['Campaign Objective'] = newCampaign.objective
              temp['Buying Type'] = newCampaign.buyingType
              temp['Campaign Bid Strategy'] = newCampaign.bidStrategy
              if (userPlatform === 'AND') {
                temp['Campaign Lifetime Budget'] = newCampaign.andLifetimeBudget
                temp['User Operating System'] = 'Android'
              }
              if (userPlatform === 'IOS') {
                temp['Campaign Lifetime Budget'] = newCampaign.iosLifetimeBudget
                temp['User Operating System'] = 'iOS'
              }
              temp['Ad Set Run Status'] = newAdSet.status
              temp['Ad Set Name'] = `${finalCampaignName}_${newAdSet.name}`
              temp['Ad Set Time Start'] = newAdSet.timeStart
              temp['Ad Set Time Stop'] = newAdSet.timeStop
              temp['Link Object ID'] = `o:${page.id}`
              temp['Application ID'] = `x:${app.id}`
              temp['Instagram Account ID'] = `x:${ig.id}`
              if (userPlatform === 'AND') {
                temp['Link'] = app.object_store_urls.google_play
              }
              if (userPlatform === 'IOS') {
                temp['Link'] = app.object_store_urls.itunes
              }
              temp['Gender'] = newAdSet.gender
              temp['Age Min'] = ageMin
              temp['Age Max'] = ageMax
              temp['Countries'] = country
              temp['Location Types'] = 'home'
              if (newAdSet.useSavedAudience && checkNested(newAdSet, 'savedAudience', 'targeting', 'flexible_spec')) {
                temp['Flexible Inclusions'] = JSON.stringify(newAdSet.savedAudience.targeting.flexible_spec)
              }
              if (newAdSet.useSavedAudience && checkNested(newAdSet, 'savedAudience', 'targeting', 'custom_audiences')) {
                temp['Custom Audiences'] = newAdSet.savedAudience.targeting.custom_audiences.map(ca => `${ca.id}:${ca.name}`).join(',')
              }
              else {
                temp['Custom Audiences'] = newAdSet.customAudiences.map(ca => `${ca.id}:${ca.name}`).join(',')
              }
              temp['Ad Name'] = `${finalCampaignName}_${newAdSet.name}_${newAd.name}`
              temp['Ad Status'] = newAd.status
              if (newAd.mediaType === 'image') {
                temp['Creative Type'] = 'Link Page Post Ad'
                temp['Image Hash'] = `${newAd.selectedImage.id}`
              }
              else if (newAd.mediaType === 'video') {
                temp['Creative Type'] = 'Video Page Post Ad'
                temp['Video ID'] = `v:${newAd.selectedVideo.id}`
                temp['Video Thumbnail URL'] = newAd.selectedVideo.picture
              }
              temp['Call to Action'] = newAd.cta
              temp['Title'] = newAd.title
              temp['Body'] = newAd.caption
              temp['Link Description'] = newAd.description
              allAds.push(temp)
            })
          })
      })
    })

    allAds.forEach(ad => {
      var temp = []
      columns.forEach(column => {
        if (ad[column] !== null || ad[column] !== undefined) {
          temp.push(ad[column])
        }
        else {
          temp.push('')
        }
      })
      rows.push(temp)
    })

    return rows

  }



  return <div>
    <Button onClick={e => {
      exportToCsv('text.csv', getAllRows())
    }}>{'Download'}</Button>
  </div>
}

export default withDialog(GenerateCodeDialog, 'Generate code', 'Code generated')