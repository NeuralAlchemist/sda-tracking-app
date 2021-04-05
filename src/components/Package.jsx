

import "../styles/global.css";
import "../styles/package.css";
import RenderImage from "../components/RenderImage";

export default function Package({ information }) {
    let delivery_status;
    let verification_required = information.verification_required
        ? "Required"
        : "Not Required";

    function Capitalize(data) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }

    function GetReadableDate(date) {
        return date.replace(/T/, " ").replace(/\..+/, "").replace(/Z/, "");
    }
    function displayHello() {
        console.log("Hello");
    }
    let neat_date = GetReadableDate(information.eta);
    console.log(neat_date);
    delivery_status = Capitalize(information.status);
    return (
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
                </div>
                <div>
                    <p className="sub-header">Verification</p>
                    <p className="detail">{verification_required}</p>
                </div>
            </div>
        </article>
    );
}
