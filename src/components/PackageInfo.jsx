import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";


import "../styles/global.css";
import "../styles/package.css";
import RenderImage from "./RenderImage";
import { userParcelData } from "../states/userParcelData";

export default function PackageInfo({ match }) {
    const userParcel = useRecoilValue(userParcelData)
    const id = match.params.id;
    const parcel = userParcel.find((item) => item.parcel_id === id);
    let verification_required = parcel.verification_required
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
        return parcel.status === "ready-for-pickup";
    }

    let neat_date = GetReadableDate(parcel.eta);
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
                        {Capitalize(parcel.status)}
                    </div>
                    <div className="package-details-grid">
                        <div>
                            <p className="sub-header">Sender</p>
                            <p className="detail">{parcel.sender}</p>
                        </div>
                        <div>
                            <p className="sub-header">ETA</p>
                            <p className="detail">{neat_date}</p>
                        </div>
                        <div data-pickup={setPickupStatus()}>
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
                    <div id="data-extra">
                        <p className="sub-header">Notes</p>
                        <p className="detail">{parcel.notes}</p>
                    </div>
                </article>
            </div>
        </div>
    );
}
