import { normalize } from './skills'
import R from 'ramda'
import Maybe from 'maybe'
const benignErrorCodes = [
  'warming_up'
]
const parseHackableJSON = (hackableJSON) =>
  Maybe(
    R.tryCatch(
      JSON.parse, 
      R.F
    )(hackableJSON))
  .value()

  // 1. Get ugly-ass input as map with username as keys
  // 2. use a function that use mapObjIndexed to return pojo with 
  //    FIELDS: 
  //      username  |  mentorship                  |  location
//          from key,   parse,                          
//                        take each mentKey       
//                          map values
//                          add to array
//                          make single level
//                          reject undefined or NaN
//                          keep all that are strings
//                          trim all string whitespace
//                          reject empty strings  



  // Takes in any input, adds them to an array, unnests it to a single level array
  // If any are Nullish they are rejected, everything else is stringified
  // Then trimmed, then filtered to remove any empty strings
  // Returns [] at the least

  // toStringArray :: a -> [a] -> [@NotNull a] -> [String] -> [String] -> [@NotEmpty String]
  const toStringArray = 
      R.pipe(
        // magic nesty part
        R.of, // a -> [a] | [a] -> [[a]] | [[a]] -> [[[a]]]
        R.unnest, // [a] -> [a] | [[a]] -> [a] | [[[a]]] -> [a] etc...
        // Actual manipulation
        R.reject(R.isNil), // [a] -> [@NotNull a]
        R.filter(R.is(String)), // [NotNull a] -> [String] 
        R.map(R.trim), // [String] -> [String]
        R.reject(R.isEmpty), // [String] -> [@NotEmpty String]
      )

  export const normalizeUserTransformations = {
    username
  }
  export const normalizeMentorship = (mentorship) => {
    if (!mentorship) return undefined
    const seeking = toStringArray(mentorship.seeking)
    const offering = toStringArray(mentorship.offering)  
    if (R.isEmpty(seeking) && R.isEmpty(offering)) return undefined
    return {
        seeking, 
        offering
      }
}

export const getProfileUrl = (size) => (username) =>
  `https://discourse-cdn-sjc2.com/standard11/user_avatar/www.funfunforum.com/${username}/${size}/1133_1.png`

export const formatUser = (hackable_json, username, userObj) => {
  
  let mentorship = Maybe(normalizeMentorship(json.mentorship))
  let location = Maybe(json.usermap_location)
  console.log(mentorship.isJust())
  return {
    hackable_json,
    username: username,
    url: `https://www.funfunforum.com/u/${username}/`,
    mentorship: mentorship.isJust()
      ? mentorship.val
      : undefined,
    
   location: location.isJust() 
      ? location.val 
      : undefined
  }
}
// formatUsersWithTransducer :: Object -> [Object]
export const formatUsersWithTransducer = R.pipe(
  // transformUsertoObj,
  R.mapObjIndexed(formatUser),
  R.tap(console.log),
  R.filter(user => !!user.mentorship),
  R.tap(console.log),
  R.values,
  )

export const userMentionsSkill = (user, skill) => {
  skill = normalize(skill.toLowerCase())
  const seeking = user.mentorship.seeking.map(normalize)
  const offering = user.mentorship.offering.map(normalize)
  const includesSkill = R.any(R.invoker(1, 'includes')(skill))
  return includesSkill(seeking) || includesSkill(offering)
}

export const makeFetchUsers = (fetcher) => {
  const fetchUsers = async (onFailWait=5000) => {
    let data = await fetcher()
    if (data.error_code) {
      console.error(data.error_message)
      if (benignErrorCodes.includes(data.error_code)) {
        // TODO let the user know there's a delay
        // Hopefully with the new endpoint it won't error anyway
        await Promise.delay(onFailWait)
        return fetchUsers(onFailWait * 2)
      }
    }
    // TODO map/filter asynchronously so as not to hog the event loop
    return formatUsersWithTransducer(data)
    
    
  }
  return fetchUsers
}
