import { useQuery } from 'react-query'
import { PostRequest } from './requests/postRequest';

const apiEndpoint = `http://headless-craft.test/api`

export const CraftCMSQuery = (searchParams) => {

  const {uid, section} = searchParams

  const queryString = Object.keys(searchParams).map(function(key) {
    return key + '=' + searchParams[key]
  }).join('&');

  const request = {
    apiUrl: `${apiEndpoint}?${queryString}`,
    uid
  }

  const sections = {
    'blog': PostRequest(request),
  }

  return useQuery(
    ['craft', queryString],
    sections[section],
    {
      // refetchIntervalInBackground: 1000,
      staleTime: 1000,
    }
  )
}