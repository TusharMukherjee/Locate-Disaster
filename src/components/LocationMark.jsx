import { Icon } from "@iconify/react"
import fireIcon from "@iconify/icons-mdi/fire-alert"

const LocationMark = ({eventdata, lat, lng, onClick}) => {
    
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon className="location-icon" icon={fireIcon} />
        </div>
    )
}

export default LocationMark
