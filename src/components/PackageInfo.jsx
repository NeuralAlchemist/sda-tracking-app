import Moment from "react-moment";
import { Link } from "react-router-dom";

import "../styles/global.css";
import "../styles/package.css";
import RenderImage from "./RenderImage";

export default function PackageInfo({ information }) {
    let verification_required = information.verification_required
        ? "Required"
        : "Not Required";

    function Capitalize(data) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }

    function GetReadableDate(date) {
        return (
            <Moment local format="YYYY-MM-DD HH:mm">
                {date}
            </Moment>
        );
    }

    function setPickupStatus() {
        return information.status === "ready-for-pickup";
    }

    let neat_date = GetReadableDate(information.eta);
    return (
        <article className="package">
            <div className="delivery-status">
                <RenderImage status={information.status} />
                {Capitalize(information.status)}
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
                <div id="data-extra">
                    <p className="sub-header">Parcel ID</p>
                    <p className="detail">{information.parcel_id}</p>
                </div>
            </div>
            <div id="data-extra">
                <p className="sub-header">Notes</p>
                <p className="detail">{information.notes}</p>
            </div>
        </article>
    );
}
