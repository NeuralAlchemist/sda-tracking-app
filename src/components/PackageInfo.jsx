import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import "../styles/global.css";
import "../styles/package.css";
import RenderImage from "./RenderImage";
import capitalize from "../functions/capitalize";
import getReadableDate from "../functions/getReadableDate";
import setPickupStatus from "../functions/setPickupStatus";
import getVerificationInfo from "../functions/getVerificationInfo";
import { userParcelData } from "../states/userParcelData";
import getNeatNotes from "../functions/getNeatNotes";

export default function PackageInfo({ match }) {
    // Global states
    const userParcel = useRecoilValue(userParcelData)
    // Constants
    const id = match.params.id;
    const parcel = userParcel.find((item) => item.parcel_id === id);

    let verification_required = getVerificationInfo(parcel.verification_required);
    let delivery_status = capitalize(parcel.status);
    let eta = getReadableDate(parcel.eta);
    let pickup_status = setPickupStatus(parcel.status);
    let notes = getNeatNotes(parcel.notes);
    let data_notes = (notes==null);


    return (
        <div>
            <Link to="/packagelist">
                <div className="go-back-header">
                    <p className="back-button">&larr;</p>
                    <p>Back to all packages</p>
                </div>
            </Link>
            <div className="page-container">
                <article className="package">
                    <div className="delivery-status">
                        <RenderImage status={parcel.status} />
                        {delivery_status}
                    </div>
                    <div className="package-details-grid">
                        <div>
                            <p className="sub-header">Sender</p>
                            <p className="detail">{parcel.sender}</p>
                        </div>
                        <div>
                            <p className="sub-header">ETA</p>
                            <p className="detail">
                                {eta}
                            </p>
                        </div>
                        <div data-pickup={pickup_status}>
                            <p className="sub-header">Pickup Location</p>
                            <p className="detail">{parcel.location_name}</p>
                        </div>
                        <div>
                            <p className="sub-header">Verification</p>
                            <p className="detail">{verification_required}</p>
                        </div>
                        <div id="data-extra">
                            <p className="sub-header">Parcel ID</p>
                            <p className="detail">{parcel.parcel_id}</p>
                        </div>
                    </div>
                    <div id="data-extra" data-notes={data_notes}>
                        <p className="sub-header">Notes</p>
                        <p className="detail">{notes}</p>
                    </div>
                </article>
            </div>
        </div>
    );
}
