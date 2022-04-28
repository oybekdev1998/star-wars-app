//common
export const HTTPS = 'https://';
export const HTTP = 'http://';
//swapi
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page='
export const SWAPI_SEARCH = '/?search='
export const GET_PEOPLE_DATA = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const GET_PERSON_DATA = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE;
export const GET_SEARCH_DATA = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_SEARCH;

//photo
export const VISUAL_GUIDE = 'starwars-visualguide.com/assets/';
export const CHARACTERS = 'img/characters/';
export const TYPE = '.jpg';

export const GET_PEOPLE_IMG = HTTPS+VISUAL_GUIDE+CHARACTERS
