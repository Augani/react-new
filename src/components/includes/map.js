import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {Pane} from 'evergreen-ui';


var iconPin = {
  path: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
  fillColor: '#64be67',
  fillOpacity: 1,
  scale: 0.05, //to reduce the size of icons
 };

export class MapContainer extends Component {
    state = { userLocation: { lat: 32, lng: 32 }, loading: true, width: 0, height: 0 };

    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { lat: latitude, lng: longitude },
            loading: false
          });
        },
        () => {
          this.setState({ loading: false, width: this.props.width, height: this.props.height });
        }
      );
    }
  render() {
    const { loading, userLocation, width, height } = this.state;
    const { google } = this.props;
    if (loading) {
        return null;
      }
    return (
      <Pane>
 <Map
        google={this.props.google}
       style={{width: '90%', height: '90%'}}
        initialCenter={userLocation} zoom={15}

      />


      {/* {this.props.jobsData.map((key, data)=>{
        return (
          <Marker key={23033}
          position={userLocation}
          icon={iconPin} />
        )
      })}
      
      
     
position={{ lat: 32.4695839, lng: -97.0587439 }}
/> */}
      </Pane>
     
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDxVsSGOb4WWkeeS0ngE9kOAsrRT8zGWYU'
})(MapContainer);