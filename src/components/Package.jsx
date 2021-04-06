import {Link} from "react-router-dom";

import "../styles/global.css";
import "../styles/package.css";

import getReadableDate from "../functions/getReadableDate";
import setPickupStatus from "../functions/setPickupStatus";
import getVerificationInfo from "../functions/getVerificationInfo";
import PackageCard from "./PackageCard";
export default function Package({ information }) {
    let verification_required = getVerificationInfo(
        information.verification_required
    );
    let eta = getReadableDate(information.eta);
    let pickup_status = setPickupStatus(information.status);
    return (
        <article className="package">
            <Link to={`packagelist/${information.parcel_id}`}>
                <PackageCard information={information}/>
            </Link>
        </article>
    );
}
