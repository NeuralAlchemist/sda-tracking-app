import {Link} from "react-router-dom";

import "../styles/global.css";
import "../styles/package.css";
import RenderImage from "./RenderImage";
import capitalize from "../functions/capitalize";
import getReadableDate from "../functions/getReadableDate";
import setPickupStatus from "../functions/setPickupStatus";
import getVerificationInfo from "../functions/getVerificationInfo";
export default function Package({ information }) {
    let verification_required = getVerificationInfo(
        information.verification_required
    );
    let delivery_status = capitalize(information.status);
    let eta = getReadableDate(information.eta);
    let pickup_status = setPickupStatus(information.status);
    return (
        <article className="package">
            <Link to={`packagelist/${information.information_id}`}>
                <div className="delivery-status">
                    <RenderImage status={information.status} />
                    {delivery_status}
                </div>
                <div className="package-details-grid">
                    <div>
                        <p className="sub-header">Sender</p>
                        <p className="detail">{information.sender}</p>
                    </div>
                    <div>
                        <p className="sub-header">ETA</p>
                        <p className="detail">{eta}</p>
                    </div>
                    <div data-pickup={pickup_status}>
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
