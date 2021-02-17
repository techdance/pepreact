const initialState = {
  user: [],
  profile: { personalInformation: null, institutionProfile: null, communicationPreferences: null, credentials: null, professionalBio: null, areaofinterest_list: null },
}



const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        users: action.data?.users
      }

      case "GET_PERSONALDETAILS":
      return {
        ...state,
        profile: Object.assign(state.profile,{ personalInformation: action.data }),
      }

      case "GET_INSTITUTION_PROFILE_DATA":
      return {
        ...state,
        profile: Object.assign(state.profile,{ institutionProfile: action.data?.Institution }),
      }

      case "GET_COMMUNICATION_PREFERENCES":
      return {
        ...state,
        profile: Object.assign(state.profile,{ communicationPreferences: action.data }),
      }

      case "GET_COLLABORATEDLANGUAGE_PREFERENCES":
      return {
        ...state,
        data: action.data,
        totalPages: action.totalPages,
        params: action.params,
        totalRecords: action.totalRecords,
        allData: action.data.org,
        sortIndex: action.sortIndex
      }

      case "GET_COLLABORATED_USER_PROFILE_IMAGE":
      return {
        ...state,
        profile: Object.assign(state.profile.pro.action.data),
      }
      case "GET_COLLABORATED_USER_CREDENTIAL":
      return {
        ...state,
        profile: Object.assign( state.profile, {credentials: action.data}),
      }
      case "GET_COLLABORATED_USER_PROFESSIONAL_BIO":
      return {
        ...state,
        profile: Object.assign(state.profile, {professionalBio: action.data}),
      }
    case "GET_COLLABORATED_PROFILE_AREA_OF_INTEREST_ALL":
        return {
          ...state,
          profile: Object.assign(state.profile.personalInformation, {image: action.data?.blobData}),
        }

     case "GET_COLLABORATED_PROFILE_AREA_OF_INTEREST_SINGLE":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }

     case "POST_THOUGHTSAVE":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }
     case "POST_COMMUNICATION_PREFERENCES_SAVE":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }
    case "POST_COLLABORATED_USER_PROFILE_IMAGE_SAVE":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }
    case "POST_COLLABORATED_USER_CREDENTIAL":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }
    case "POST_COLLABORATED_USER_PROFESSIONAL_BIO_SAVE":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }
    case "POST_COLLABORATED_PROFILE_AREA_OF_INTEREST":
        return {
          ...state,
          data: action.data,
          totalPages: action.totalPages,
          params: action.params,
          totalRecords: action.totalRecords,
          allData: action.data.org,
          sortIndex: action.sortIndex
        }

    default:
      return state
  }
}

export default OrganizationReducer
