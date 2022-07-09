import React from "react";
import GoogleMapReact from "google-map-react";
import pin from "./pin.png";
import { Link } from "react-router-dom";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};
const address = [
  {
    id: 1423,
    date_time: "2022-05-20T00:00:00+00:00",
    date_hour: "20-05-2022_11",
    longitude: "49.76368",
    date: "2022-05-20",
    imo: "9385300",
    latitude: "27.1265715",
    status: "1"
  },
  {
    id: 1424,
    date_time: "2022-05-20T00:00:00+00:00",
    date_hour: "20-05-2022_12",
    longitude: "49.76368",
    date: "2022-05-20",
    imo: "9385300",
    latitude: "27.126733",
    status: "1"
  },
  {
    id: 1425,
    date_time: "2022-05-20T00:00:00+00:00",
    date_hour: "20-05-2022_14",
    longitude: "49.76355",
    date: "2022-05-20",
    imo: "9385300",
    latitude: "27.126644",
    status: "1"
  },
  {
    id: 1426,
    date_time: "2022-05-20T00:00:00+00:00",
    date_hour: "20-05-2022_15",
    longitude: "49.76355",
    date: "2022-05-20",
    imo: "9385300",
    latitude: "27.126686",
    status: "1"
  },
  {
    id: 1427,
    date_time: "2022-05-20T00:00:00+00:00",
    date_hour: "20-05-2022_16",
    longitude: "49.76355",
    date: "2022-05-20",
    imo: "9385300",
    latitude: "27.126738",
    status: "1"
  },
  {
    id: 1428,
    date_time: "2022-05-20T00:00:00+00:00",
    date_hour: "20-05-2022_17",
    longitude: "49.76355",
    date: "2022-05-20",
    imo: "9385300",
    latitude: "27.126558",
    status: "1"
  }
];
class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 27.126738,
      lng: 49.76355
    },
    zoom: 11
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {console.log(this.props.locations)}
          {console.log("Address", address)}
          {address?.map((item) => {
            return (
              <Link
                to={"/" + item.imo}
                key={item.id}
                lat={item.latitude}
                lng={item.longitude}
              >
                <img style={markerStyle} src={pin} alt="pin" />
              </Link>
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
