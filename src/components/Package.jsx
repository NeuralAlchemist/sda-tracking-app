import "../styles/global.css"
import "../styles/package.css"

export default function Package({information}){
    let delivery_status;
    let verification_required = information.verification_required? "Required" : "Not Required";

    function Capitalize(data){
        return(
            data.charAt(0).toUpperCase() + data.slice(1)
        );
    }
    delivery_status = Capitalize(information.status);
    return(
        <article className="package">
            <div className="delivery-status">
                {delivery_status}
            </div>
            <div className="package-details-grid">
                <div>
                    <p className="sub-header">Sender</p>
                    <p className="detail">{information.sender}</p>
                </div>
                <div>
                    <p className="sub-header">ETA</p>
                    <p className="detail">{information.eta}</p>
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
    )
}