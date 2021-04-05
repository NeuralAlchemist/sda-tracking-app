//NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShippingFast,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
//Project files
import DeliveredIcon from "../images/delivered.svg";
import InfoReceivedIcon from "../images/info-order-received.svg";
export default function RenderImage(props) {
    console.log(props);
    switch (props.status) {
        case "order-info-received":
            return <img src={InfoReceivedIcon} alt="Info-Received"/>
        case "on-the-way":
            return <FontAwesomeIcon icon={faShippingFast}/>;
        case "ready-for-pickup":
            return <FontAwesomeIcon icon={faMapMarkedAlt}/>;
        case "delivered":
            return <img src={DeliveredIcon} alt="Delivered" />;
        default:
            return <img src={InfoReceivedIcon} alt="Info-Received" />;
    }
}
