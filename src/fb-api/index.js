import React from 'react'
import { LOCAL_STORAGE_KEYS } from "../common/constants";
import qs from 'query-string'

const FB_TOKEN = localStorage.getItem(LOCAL_STORAGE_KEYS.FB_TOKEN)

const getFinalUrl = (baseUrl, params) => {
  const stringified = qs.stringify(params);
  return `${baseUrl}?${stringified}`
}

export const adAccountsUrl = () => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,name',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/me/adaccounts`
  return getFinalUrl(baseUrl, params)
}

export const adCampaignsUrl = (adAccountId) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'name,objective',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${adAccountId}/campaigns`
  return getFinalUrl(baseUrl, params)
}

export const adSetsUrl = (campaignId) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'name,targeting',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${campaignId}/adsets`
  return getFinalUrl(baseUrl, params)
}

export const pagesUrl = () => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,name,picture,username',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/me/accounts`
  return getFinalUrl(baseUrl, params)
}

export const igsUrl = (accountId) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,username,profile_pic',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${accountId}/instagram_accounts`
  return getFinalUrl(baseUrl, params)
}

export const appsUrl = (accountId) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,name,logo_url,object_store_urls',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${accountId}/advertisable_applications`
  return getFinalUrl(baseUrl, params)
}

export const customAudiencesUrl = (adAccountId) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,name,subtype',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${adAccountId}/customaudiences`
  return getFinalUrl(baseUrl, params)
}

export const savedAudiencesUrl = (adAccountId) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,name,targeting',
    limit: '5'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${adAccountId}/saved_audiences`
  return getFinalUrl(baseUrl, params)
}

export const imagesUrl = (adAccountId, name) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,name,url_128,created_time',
    name,
    limit: '10'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${adAccountId}/adimages`
  return getFinalUrl(baseUrl, params)
}

export const videosUrl = (adAccountId, title) => {
  const params = {
    access_token: FB_TOKEN,
    fields: 'id,title,picture,thumbnails,created_time',
    title,
    limit: '10'
  }
  const baseUrl = `https://graph.facebook.com/v4.0/${adAccountId}/advideos`
  return getFinalUrl(baseUrl, params)
}

export const useFetch = (url, method) => {
  const [response, setResponse] = React.useState()
  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    if (url) {
      setResponse(null)
      fetch(url, {
        method,
        signal
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json()
        })
        .then(res => {
          setResponse(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
    return () => {
      controller.abort()
    }
  }, [url, method])
  return response
}