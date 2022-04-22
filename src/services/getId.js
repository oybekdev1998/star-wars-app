import {
    HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    GET_PEOPLE_IMG, TYPE, SWAPI_PARAM_PAGE
} from "../constants/api";

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
  const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length)
  return Number(id)
}

 const getId = (url, category) => {
    const id = url
        .replace(HTTPS+SWAPI_ROOT+category, "")
        .replace(/\//g, "")

     return id;
};
 export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
 export const getPeopleImg = id => `${GET_PEOPLE_IMG}/${id+TYPE}`
