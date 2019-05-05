import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loadRandomUsers,
  averageUsersAge,
  minimumUsersAge,
  maximumUsersAge,
  northernMostPerson,
  southernMostPerson
} from '../Action';
import LocationDetails from './LocationDetails';

class UsersStat extends Component{
  constructor(){
    super();
    this.loadUsers = this.loadUsers.bind(this);
    this.findAverageAge = this.findAverageAge.bind(this);
    this.findMinimumAge = this.findMinimumAge.bind(this);
    this.findMaximumAge = this.findMaximumAge.bind(this);
    this.findNorthernMostPerson = this.findNorthernMostPerson.bind(this);
    this.findSouthernMostPerson = this.findSouthernMostPerson.bind(this);
  }
  loadUsers(){
    this.props.loadRandomUsers();
  }
  findAverageAge(){
    this.props.averageUsersAge();
  }
  findMinimumAge(){
    this.props.minimumUsersAge();
  }
  findMaximumAge(){
    this.props.maximumUsersAge();
  }
  findNorthernMostPerson(){
    this.props.northernMostPerson();
  }

  findSouthernMostPerson(){
    this.props.southernMostPerson();
  }

  displayObject(obj){
    if(Object.keys(obj).length === 0){
      return '';
    }else{
      return <LocationDetails obj={obj} />;
    }
  }
  render(){
    console.log("State: ", this.props)
    return (<div className="container">
             <div className="display-block">
                  <div className="button-group" >
                        <button disabled={this.props.state.status === 'waiting'} onClick={this.loadUsers}> Load Users </button>
                   </div>
             <p> <strong> Random users loading status: </strong> {this.props.state.status} </p></div>
            {this.props.state.status === 'waiting' ?
                  <p> Loading .... </p> :
              <div>
                  <div className="display-block">
                        <div className="button-group" >
                            <button onClick={this.findAverageAge}> Average users age </button>
                         </div>
                        <p> <strong> Average users age: </strong>{this.props.state.averageAge} </p>
                  </div>
                  <div className="display-block">
                      <div className="button-group" >
                          <button onClick={this.findMinimumAge}> Minimum users age</button>
                      </div>
                      <p> <strong> Minimum users age: </strong> {this.props.state.minAge}</p>
                  </div>
                  <div className="display-block">
                      <div className="button-group" >
                          <button onClick={this.findMaximumAge}> Maximum users age </button>
                      </div>
                      <p> <strong> Maximum users age:</strong> {this.props.state.maxAge} </p>
                  </div>
                  <div className="display-block">
                      <div className="button-group" >
                          <button onClick={this.findNorthernMostPerson}> Northern most user</button>
                      </div>
                      <strong> Northern most user: </strong> <br />
                      {this.displayObject(this.props.state.northernMostPerson)}
                  </div>
                  <div className="display-block">
                      <div className="button-group" >
                          <button onClick={this.findSouthernMostPerson}> Southern most user </button>
                      </div>
                      <strong> Southern most user: </strong> <br />
                      {this.displayObject(this.props.state.southernMostPerson)}
                  </div>
              </div>
          }
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {state: state};
}

export default connect(mapStateToProps,
                  {loadRandomUsers,
                    averageUsersAge,
                    minimumUsersAge,
                    maximumUsersAge,
                    northernMostPerson,
                    southernMostPerson})(UsersStat);
