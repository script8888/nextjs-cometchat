import axios from 'axios'
import consts from '../pages/consts'

const cometChatUrl = 'https://api-us.cometchat.io/v2.0/users'

export const registerUser = async (uid, name) => {   
  const data = await axios.post(cometChatUrl, { uid, name }, { headers: { appId: consts.APP_ID, apiKey: consts.API_KEY }})

  return data
}