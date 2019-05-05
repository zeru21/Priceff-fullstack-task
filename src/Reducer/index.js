import {LOAD_RANDOM_USERS_WAITING,
        LOAD_RANDOM_USERS_SUCCESS,
        LOAD_RANDOM_USERS_ERROR,
        AVERAGE_USERS_AGE,
        MINIMUM_USERS_AGE,
        MAXIMUM_USERS_AGE,
        NORTHERN_MOST_LOCATION,
        SOUTHERN_MOST_LOCATION,
      } from '../Type';
import _ from 'lodash';

const init ={
  status: 'init',
  averageAge: 0,
  minAge: 0,
  maxAge: 0,
  randomUsers: [],
  northernMostPerson: {},
  southernMostPerson: {}
};
export  default function reducer(state=init, action){
  let result;
  switch (action.type) {
      case LOAD_RANDOM_USERS_WAITING:
          return {...state, status:'waiting'};
      case LOAD_RANDOM_USERS_SUCCESS:
           result = {...state, minAge: 0, maxAge: 0, averageAge:0, status: 'success',randomUsers: action.payload};
           return result;
       case LOAD_RANDOM_USERS_ERROR:
            result = { ...state, status: 'error'};
            return result;
       case AVERAGE_USERS_AGE:
            const averageAge = state.averageAge===0?_.meanBy(state.randomUsers, u=>u.dob.age):state.averageAge;
            result = {...state, averageAge};
            return result;
      case MINIMUM_USERS_AGE:
          const minAge = state.minAge === 0 ? _.minBy(state.randomUsers, u=>u.dob.age) : state.minAge;
           result = {...state, minAge: minAge.dob.age};
           return result;
     case MAXIMUM_USERS_AGE:
          const maxAge = state.maxAge === 0 ? _.maxBy(state.randomUsers, u=>u.dob.age) : state.maxAge;
          result = {...state, maxAge: maxAge.dob.age};
          return result;
    case NORTHERN_MOST_LOCATION:
          if(Object.keys(state.northernMostPerson).length === 0 && Object.keys(state.southernMostPerson).length === 0){
              const sortedUsers = _.sortBy(state.randomUsers, u=>u.location.coordinates.latitude);
              let northernMostPerson = sortedUsers[sortedUsers.length-1];

              result = {...state, randomUsers: sortedUsers, northernMostPerson};
              return result;
           }
           let northernMostPerson = state.randomUsers[state.randomUsers.length-1];
          return {...state, northernMostPerson };
    case SOUTHERN_MOST_LOCATION:
          if(Object.keys(state.southernMostPerson).length === 0 && Object.keys(state.northernMostPerson).length === 0){
              const sortedUsers = _.sortBy(state.randomUsers, u=>u.location.coordinates.latitude);
              let southernMostPerson = sortedUsers[0];

              result = {...state, randomUsers: sortedUsers, southernMostPerson};
              return result;
           }
              let southernMostPerson = state.randomUsers[0];
              return {...state, southernMostPerson};
      default:
            return state;
  }
}
