import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import "../styles/global.css";
import "../styles/package.css";
import { userParcelData } from "../states/userParcelData";
import getNeatNotes from "../functions/getNeatNotes";
import PackageSingleDetail from "./PackageSingleDetail";
import PackageCard from "./PackageCard";

export default function PackageInfo({ match }) {
    // Global states
    const userParcel = useRecoilValue(userParcelData);
    // Constants
    const id = match.params.id;
    const parcel = userParcel.find((item) => item.parcel_id === id);
    let notes = getNeatNotes(parcel.notes);
    let data_notes = parcel.notes === null;
    console.log(data_notes);

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
                    <PackageCard information={parcel} />
                    <div className="package-details-grid">
                        <div id="data-extra">
                            <PackageSingleDetail
                                header="Parcel_ID"
                                value={parcel.parcel_id}
                            />
                        </div>
                    </div>
                    <div id="data-extra" data-notes={data_notes}>
                        <PackageSingleDetail header="Notes" value={notes} />
                    </div>
                </article>
            </div>
        </div>
    );
}
