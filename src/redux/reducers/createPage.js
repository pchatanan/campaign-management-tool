import ACT_TYPES, { AD_LEVELS } from "../actions";
import _ from 'lodash/lang'
import { checkNested } from "../../common/utils";

const defaultState = {
  defaultSetting: null,
  account: null,
  page: null,
  ig: null,
  app: null,
  ageMin: '',
  ageMax: '',
  country: '',
  gameName: '',
  campaigns: [],
  newCampaigns: [],
  adSets: [],
  newAdSets: [],
  ads: [],
  newAds: []
}

const createPage = (state = defaultState, action) => {
  const clonedState = _.cloneDeep(state)
  switch (action.type) {
    case ACT_TYPES.SET_ACCOUNT:
      clonedState.account = action.account
      return clonedState
    case ACT_TYPES.SET_PAGE:
      clonedState.page = action.page
      return clonedState
    case ACT_TYPES.SET_IG:
      clonedState.ig = action.ig
      return clonedState
    case ACT_TYPES.SET_APP:
      clonedState.app = action.app
      return clonedState
    case ACT_TYPES.SET_AGE_MIN:
      clonedState.ageMin = action.ageMin
      return clonedState
    case ACT_TYPES.SET_AGE_MAX:
      clonedState.ageMax = action.ageMax
      return clonedState
    case ACT_TYPES.SET_COUNTRY:
      clonedState.country = action.country
      return clonedState
    case ACT_TYPES.SET_GAME_NAME:
      clonedState.gameName = action.gameName
      return clonedState
    case ACT_TYPES.ADD_ITEM:
      if (action.isNew) {
        switch (action.ad_level) {
          case AD_LEVELS.CAMPAIGN:
            return {
              ...clonedState,
              newCampaigns: [...clonedState.newCampaigns, action.item]
            }
          case AD_LEVELS.ADSET:
            return {
              ...clonedState,
              newAdSets: [...clonedState.newAdSets, action.item]
            }
          case AD_LEVELS.AD:
            return {
              ...clonedState,
              newAds: [...clonedState.newAds, action.item]
            }
          default:
            return state
        }
      }
      else {
        switch (action.ad_level) {
          case AD_LEVELS.CAMPAIGN:
            return {
              ...clonedState,
              campaigns: [...clonedState.campaigns, action.item]
            }
          case AD_LEVELS.ADSET:
            return {
              ...clonedState,
              adSets: [...clonedState.adSets, action.item]
            }
          case AD_LEVELS.AD:
            return {
              ...clonedState,
              ads: [...clonedState.ads, action.item]
            }
          default:
            return state
        }
      }
    case ACT_TYPES.REMOVE_ITEM:
      if (action.isNew) {
        switch (action.ad_level) {
          case AD_LEVELS.CAMPAIGN:
            return {
              ...clonedState,
              newCampaigns: clonedState.newCampaigns.splice(action.index, 1)
            }
          case AD_LEVELS.ADSET:
            return {
              ...clonedState,
              newAdSets: clonedState.newAdSets.splice(action.index, 1)
            }
          case AD_LEVELS.AD:
            return {
              ...clonedState,
              newAds: clonedState.newAds.splice(action.index, 1)
            }
          default:
            return state
        }
      }
      else {
        switch (action.ad_level) {
          case AD_LEVELS.CAMPAIGN:
            clonedState.campaigns.splice(action.index, 1)
            return clonedState
          case AD_LEVELS.ADSET:
            clonedState.adSets.splice(action.index, 1)
            return clonedState
          case AD_LEVELS.AD:
            clonedState.ads.splice(action.index, 1)
            return clonedState
          default:
            return state
        }
      }
    case ACT_TYPES.SET_DEFAULT_SETTING:
      if (action.firstTime) {
        const defaultAccount = checkNested(action.defaultSetting, 'account')
        const defaultPage = checkNested(action.defaultSetting, 'page')
        const defaultIg = checkNested(action.defaultSetting, 'ig')
        const defaultApp = checkNested(action.defaultSetting, 'app')
        const defaultAgeMin = checkNested(action.defaultSetting, 'ageMin')
        const defaultAgeMax = checkNested(action.defaultSetting, 'ageMax')
        const defaultCountry = checkNested(action.defaultSetting, 'country')
        const defaultGameName = checkNested(action.defaultSetting, 'gameName')
        return {
          ...clonedState,
          defaultSetting: action.defaultSetting,
          account: defaultAccount,
          page: defaultPage,
          ig: defaultIg,
          app: defaultApp,
          ageMin: defaultAgeMin,
          ageMax: defaultAgeMax,
          country: defaultCountry,
          gameName: defaultGameName
        }
      }
      else {
        return {
          ...clonedState,
          defaultSetting: action.defaultSetting
        }
      }


    default:
      return state
  }
}

export default createPage