const axios = require('axios');
const _ = require('lodash');

const URL='https://randomuser.me/api/?results=5000';
module.exports.getRandomUsersData =  function getRandomUsersData(){
  console.log("Returning Random users promise");
  return axios.get(URL);
}

module.exports.getAverageAge = function getAverageAge(randomUsers){
    return _.meanBy(randomUsers, u=>u.dob.age);
}

module.exports.getMinimumAge = function getMinimumAge(randomUsers){
  return _.minBy(randomUsers, u=>u.dob.age);
}

module.exports.getMaximumAge = function getMaximumAge(randomUsers){
  return _.maxBy(randomUsers, u=>u.dob.age);
}

module.exports.getNorthernMostUser = function getNorthernMostUser(randomUsers) {
  const sortedUsers = _.sortBy(randomUsers,loc=>loc.coordinates.latitude);
  return sortedUsers[0];
}

module.exports.getSouthernMostUser = function getSouthernMostUser(randomUsers){
  const sortedUsers = _.sortBy(randomUsers,loc=>loc.coordinates.latitude);
  return sortedUsers[sortedUsers.length-1];
}
