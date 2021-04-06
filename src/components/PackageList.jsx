// NPM packages
import {Link} from "react-router-dom";
// Project files
import "../styles/global.css";
import "../styles/package.css";
import PackageCard from "./PackageCard";
export default function PackageList({ information }) {
    // Constants
    return (
        <article className="package">
            <Link to={`packagelist/${information.parcel_id}`}>
                <PackageCard information={information}/>
            </Link>
        </article>
    );
}
