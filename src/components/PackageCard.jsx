// Project files
import RenderImage from "./RenderImage";
import capitalize from "../functions/capitalize";
import getReadableDate from "../functions/getReadableDate";
import setPickupStatus from "../functions/setPickupStatus";
import getVerificationInfo from "../functions/getVerificationInfo";
import PackageSingleDetail from "./PackageSingleDetail";
export default function PackageCard({ information }) {
    // Constants
    let delivery_status = capitalize(information.status);
    let verification_required = getVerificationInfo(
        information.verification_required
    );
    let eta = getReadableDate(information.eta);
    let pickup_status = setPickupStatus(information.status);
    return (
        <>
            <div className="delivery-status">
                <RenderImage status={information.status} />
                {delivery_status}
            </div>
            <div className="package-details-grid">
                <PackageSingleDetail
                    header="Sender"
                    value={information.sender}
                />
                <PackageSingleDetail header="ETA" value={eta} />
                <div data-pickup={pickup_status}>
                    <PackageSingleDetail
                        header="Pickup Location"
                        value={information.location_name}
                    />
                </div>
                <PackageSingleDetail
                    header="Verification"
                    value={verification_required}
                />
            </div>
        </>
    );
}
