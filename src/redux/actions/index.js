const ACT_TYPES = {
  SET_AUTH_STATE: 'SET_AUTH_STATE',
  SET_DEFAULT_SETTING: 'SET_DEFAULT_SETTING',
  SET_ACCOUNT: 'SET_ACCOUNT',
  SET_PAGE: 'SET_PAGE',
  SET_IG: 'SET_IG',
  SET_APP: 'SET_APP',
  SET_AGE_MIN: 'SET_AGE_MIN',
  SET_AGE_MAX: 'SET_AGE_MAX',
  SET_COUNTRY: 'SET_COUNTRY',
  SET_GAME_NAME: 'SET_GAME_NAME',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export const AD_LEVELS = {
  CAMPAIGN: 'CAMPAIGN',
  ADSET: 'ADSET',
  AD: 'AD'
}

// global

export const setAuthState = (user, state) => {
  return {
    type: ACT_TYPES.SET_AUTH_STATE,
    user, state
  }
}

export const setDefaultSetting = (defaultSetting, firstTime) => {
  return {
    type: ACT_TYPES.SET_DEFAULT_SETTING,
    defaultSetting, firstTime
  }
}

// createPage

export const setAccount = (account) => {
  return {
    type: ACT_TYPES.SET_ACCOUNT,
    account
  }
}

export const setPage = (page) => {
  return {
    type: ACT_TYPES.SET_PAGE,
    page
  }
}

export const setIg = (ig) => {
  return {
    type: ACT_TYPES.SET_IG,
    ig
  }
}

export const setApp = (app) => {
  return {
    type: ACT_TYPES.SET_APP,
    app
  }
}

export const setAgeMin = (ageMin) => {
  return {
    type: ACT_TYPES.SET_AGE_MIN,
    ageMin
  }
}

export const setAgeMax = (ageMax) => {
  return {
    type: ACT_TYPES.SET_AGE_MAX,
    ageMax
  }
}

export const setCountry = (country) => {
  return {
    type: ACT_TYPES.SET_COUNTRY,
    country
  }
}

export const setGameName = (gameName) => {
  return {
    type: ACT_TYPES.SET_GAME_NAME,
    gameName
  }
}

export const addItem = (ad_level, item, isNew) => {
  return {
    type: ACT_TYPES.ADD_ITEM,
    ad_level, item, isNew
  }
}

export const removeItem = (ad_level, index, isNew) => {
  console.log('dispatch Remove')
  return {
    type: ACT_TYPES.REMOVE_ITEM,
    ad_level, index, isNew
  }
}

export default ACT_TYPES