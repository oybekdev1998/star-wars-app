import {
    HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    GET_PEOPLE_IMG, TYPE
} from "../constants/api";


 const getId = (url, category) => {
    const id = url
        .replace(HTTPS+SWAPI_ROOT+category, "")
        .replace(/\//g, "")

     return id;
};
 export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
 export const getPeopleImg = id => `${GET_PEOPLE_IMG}/${id+TYPE}`
