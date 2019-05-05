import React , { Component } from 'react';

export default class LocationDetails extends Component {
  render(){
    const {title, first, last } = this.props.obj.name;
    const {street, city, state, postcode} = this.props.obj.location;
    const {latitude, longitude} = this.props.obj.location.coordinates;
    return (
      <p className='location-details'>
         <strong> Name: </strong> {title}. {first} {last} <br />
         <strong> Street: </strong> {street} <br />
         <strong> City: </strong> {city}<br />
         <strong> State: </strong> {state} <br />
         <strong> Postal Code: </strong> {postcode}<br />
         <strong> Latitude: </strong> {latitude} <br />
         <strong> Longitude: </strong> {longitude} <br />
      </p>
    );
  }
}
