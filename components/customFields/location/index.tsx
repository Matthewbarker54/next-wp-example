// @ts-nocheck
import React from "react"
import styles from "./location.module.css";
import { ILocation } from "@/types"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Location = ({ details } :ILocation) => {


  const RegularMap = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{lat: 53.975108, lng: -1.125986}}
    defaultOptions={{streetViewControl: false}}
  >
    <Marker
      position={{ lat: 53.97332693062, lng: -1.12342542013533 }}></Marker>
  </GoogleMap>
)))

  return (
    <div className={`${styles.panel}`}>
        <div className={styles.content}>
            <div className={styles.block}>
              <h3>Details</h3>
              <div className={styles.row}>
                <div className={styles.inner}>
                  <p>Email:<a href={`mailto:${details.email}`}>{details.email}</a></p>
                  <p>Tel: <a href={`tel:${details.number}`}>{details.number}</a></p>
                  <ul className={styles.list}>
                      <li>{details.address_line_1}</li>
                      <li>{details.address_line_2}</li>
                      <li>{details.city}</li>
                      <li>{details.postcode}</li>
                  </ul>
                </div>
                <div className={styles.inner}>
                  <ul className={styles.list}>
                    <strong>Office Hours:</strong>
                      {details?.opening_hours?.map((opn, idx) => (
                        <li key={idx}><span style={{marginRight: 'auto'}}>{opn.day}</span> {+ ' ' + opn.opening_time + ' - ' + opn.closing_time}</li>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.map}>
              <RegularMap              isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmR_t3SbbpdSg9FGXM68Qm_ECDSGUPjwM"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
        </div>
    </div>
  );
};

export default Location;