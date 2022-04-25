import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";
import { omit } from 'lodash'
import { getLocalStore } from "@utils/localStorage";

export const initialState = getLocalStore('store')



export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_FROM_FAVORITE:
    return omit(state, [action.payload])
       
    default: return state;
  }
}