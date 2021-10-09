import GoogleMapReact from 'google-map-react'
import LocationMark from './LocationMark'

const Map = ({eventdata ,center, zoom}) => {

    const marks = eventdata.map(ev => {
        if(ev.categories[0].id === 8){
            return <LocationMark lat = {ev.geometries[0].coordinates[1]} lng = {ev.geometries[0].coordinates[0]}/>
        }
        return null;
    })

    return (
        <div className="map-contain">
           <div className="maparea">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBTHJN_yi04wwpGSCaoSSq2Po7Byx5jwOg' }}
                defaultCenter={center}
                defaultZoom={zoom}>
                {marks}
            </GoogleMapReact>
        </div> 
        </div>
        
    )
}

Map.defaultProps={
    center: {
        lat: 28.9845,
        lng: 77.7064
    },
    zoom: 6
}

export default Map
