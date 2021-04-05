<<<<<<< Updated upstream

=======
import Moment from "react-moment";
import {Link} from "react-router-dom";
>>>>>>> Stashed changes

import "../styles/global.css";
import "../styles/package.css";
import RenderImage from "./RenderImage";

export default function Package({ information }) {
    let delivery_status;
    let verification_required = information.verification_required
        ? "Required"
        : "Not Required";

    function Capitalize(data) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }

    function GetReadableDate(date) {
<<<<<<< Updated upstream
        return date.replace(/T/, " ").replace(/\..+/, "").replace(/Z/, "");
=======
        return (
            <Moment local format="YYYY-MM-DD HH:mm">
                {date}
            </Moment>
        );
>>>>>>> Stashed changes
    }

    function setPickupStatus() {
        return information.status === "ready-for-pickup";
    }

    let neat_date = GetReadableDate(information.eta);
    console.log(neat_date);
    delivery_status = Capitalize(information.status);
    return (
<<<<<<< Updated upstream
        <article className="package" onClick={displayHello}>
            <div className="delivery-status"><RenderImage status={information.status}/>{delivery_status}</div>
            <div className="package-details-grid">
                <div>
                    <p className="sub-header">Sender</p>
                    <p className="detail">{information.sender}</p>
                </div>
                <div>
                    <p className="sub-header">ETA</p>
                    <p className="detail">{neat_date}</p>
                </div>
                <div>
                    <p className="sub-header">Pickup Location</p>
                    <p className="detail">{information.location_name}</p>
=======
        <article className="package">
            <Link to={`packagelist/${information.parcel_id}`}>
                <div className="delivery-status">
                    <RenderImage status={information.status} />
                    {Capitalize(information.status)}
>>>>>>> Stashed changes
                </div>
                <div className="package-details-grid">
                    <div>
                        <p className="sub-header">Sender</p>
                        <p className="detail">{information.sender}</p>
                    </div>
                    <div>
                        <p className="sub-header">ETA</p>
                        <p className="detail">{neat_date}</p>
                    </div>
                    <div data-pickup={setPickupStatus()}>
                        <p className="sub-header">Pickup Location</p>
                        <p className="detail">{information.location_name}</p>
                    </div>
                    <div>
                        <p className="sub-header">Verification</p>
                        <p className="detail">{verification_required}</p>
                    </div>
                </div>
            </Link>
        </article>
    );
}
