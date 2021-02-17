import axios from "axios"
import API from '../../../services/api'

export const getUserData = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getUserDetails',
      method:'GET',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_DATA",
        data: response.data,
        params
      })
    })
  }
}
export const getPersonalInformation = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getPersonalInformation',
      method:'GET',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_PERSONALDETAILS",
        data: response.data,
        params
      })
    })
  }
}
export const getInstitutionProfileData = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getInstitutionProfileData',
      method:'GET',
      params:params
    }).then(response => {
      dispatch({
        type: "GET_INSTITUTION_PROFILE_DATA",
        data: response.data,
        params
      })
    })
  }
}
export const getCommunicationPreferences = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getCommunicationPreferences',
      method:'GET',
      params:params
    }).then(response => {
      dispatch({
        type: "GET_COMMUNICATION_PREFERENCES",
        data: response.data,
        params
      })
    })
  }
}
export const getCollaboratedLanguagePreferences = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getCollaboratedLanguagePreferences',
      method:'GET',
      params:params
    }).then(response => {
      let sortedIndex  =  [
        comState.currentPage ==1 ? (comState.currentPage) : ((comState.rowsPerPage * comState.currentPage) - comState.rowsPerPage)+1 ,
        comState.currentPage ==1 ?
          (response.data.total_count <  (comState.rowsPerPage * comState.currentPage) ) ?  response.data.total_count  : comState.rowsPerPage
          : ( (response.data.total_count <  (comState.rowsPerPage * comState.currentPage) ) ? response.data.total_count :  (comState.rowsPerPage *comState.currentPage)) ]

      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.query ? Math.ceil(response.data.query['total_count'] / comState.rowsPerPage) : 0,
        totalRecords: response.data.query.total_count,
        currentPage: comState.currentPage,
        rowsPerPage: comState.rowsPerPage,
        sortIndex: sortedIndex ,
        params
      })
    })
  }
}
export const getCollaboratedUserProfileimage = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getCollaboratedUserProfileimage',
      method:'GET',
      params:params
    }).then(response => {
      dispatch({
        type: "GET_COLLABORATED_USER_PROFILE_IMAGE",
        data: response?.data,
        params
      })
    })
  }
}
export const getCollaboratedUsercredential = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getCollaboratedUsercredential',
      method:'GET',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_COLLABORATED_USER_CREDENTIAL",
        data: response.data,
        params
      })
    })
  }
}
export const getCollaborateduserprofessionalbio = (params, comState) => {
  return async dispatch => {
    await  API({
      url: "getCollaborateduserprofessionalbio",
      method:'GET',
      params:params
    }).then(response => {
      dispatch({
        type: "GET_COLLABORATED_USER_PROFESSIONAL_BIO",
        data: response.data,
        params
      })
    })
  }
}
export const getCollaboratedProfileAreaofInterestAll = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getCollaboratedProfileAreaofInterestAll',
      method:'GET',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_COLLABORATED_PROFILE_AREA_OF_INTEREST_ALL",
        data: response.data,
        params
      })
    })
  }
}
export const getCollaboratedProfileAreaofInterestSingle = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getCollaboratedProfileAreaofInterestSingle',
      method:'GET',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_DATA",
        data: response.data,
        params
      })
    })
  }
}


export const thoughtSave = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'thoughtSave',
      method:'POST',
      params:params
    }).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        params
      })
    })
  }
}
export const communicationPreferencesSave = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'communicationPreferencesSave',
      method:'POST',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_DATA",
        data: response.data,
        params
      })
    })
  }
}
export const collaboratedLanguagePreferencesSave = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'collaboratedLanguagePreferencesSave',
      method:'POST',
      params:params
    }).then(response => {
      dispatch({
        type: "GET_DATA",
        data: response.data,
        params
      })
    })
  }
}
export const collaboratedUserProfileimageSave = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'collaboratedUserProfileimageSave',
      method:'POST',
      params:params
    }).then(response => {
      let sortedIndex  =  [
        comState.currentPage ==1 ? (comState.currentPage) : ((comState.rowsPerPage * comState.currentPage) - comState.rowsPerPage)+1 ,
        comState.currentPage ==1 ?
          (response.data.total_count <  (comState.rowsPerPage * comState.currentPage) ) ?  response.data.total_count  : comState.rowsPerPage
          : ( (response.data.total_count <  (comState.rowsPerPage * comState.currentPage) ) ? response.data.total_count :  (comState.rowsPerPage *comState.currentPage)) ]

      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.query ? Math.ceil(response.data.query['total_count'] / comState.rowsPerPage) : 0,
        totalRecords: response.data.query.total_count,
        currentPage: comState.currentPage,
        rowsPerPage: comState.rowsPerPage,
        sortIndex: sortedIndex ,
        params
      })
    })
  }
}
export const collaboratedUsercredential = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'collaboratedUsercredential',
      method:'POST',
      params:params
    }).then(response => {
      let sortedIndex  =  [
        comState.currentPage ==1 ? (comState.currentPage) : ((comState.rowsPerPage * comState.currentPage) - comState.rowsPerPage)+1 ,
        comState.currentPage ==1 ?
          (response.data.total_count <  (comState.rowsPerPage * comState.currentPage) ) ?  response.data.total_count  : comState.rowsPerPage
          : ( (response.data.total_count <  (comState.rowsPerPage * comState.currentPage) ) ? response.data.total_count :  (comState.rowsPerPage *comState.currentPage)) ]

      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.query ? Math.ceil(response.data.query['total_count'] / comState.rowsPerPage) : 0,
        totalRecords: response.data.query.total_count,
        currentPage: comState.currentPage,
        rowsPerPage: comState.rowsPerPage,
        sortIndex: sortedIndex ,
        params
      })
    })
  }
}
export const collaborateduserprofessionalbioSave = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'collaborateduserprofessionalbioSave',
      method:'POST',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_DATA",
        data: response.data,
        params
      })
    })
  }
}
export const collaboratedProfileAreaofInterest = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'collaboratedProfileAreaofInterest',
      method:'POST',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_DATA",
        data: response.data,
        totalPages: response.data.query ? Math.ceil(response.data.query['total_count'] / comState.rowsPerPage) : 0,
        params
      })
    })
  }
}
export const getLanguageList = (params, comState) => {
  return async dispatch => {
    await  API({
      url:'getLanguageList',
      method:'POST',
      params:params
    }).then(response => {

      dispatch({
        type: "GET_LANGUAGE_LIST",
        data: response.data,
        totalPages: response.data.query ? Math.ceil(response.data.query['total_count'] / comState.rowsPerPage) : 0,
        params
      })
    })
  }
}


