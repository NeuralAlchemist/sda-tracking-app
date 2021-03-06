// NPM packages
import { useRecoilValue } from "recoil";
// Project files
import PackageList from "../components/PackageList";
import { userParcelData } from "../states/userParcelData";

export default function PackageListPage() {
    // Global states
    const userParcel = useRecoilValue(userParcelData);
    // Constants
    const packageArray = userParcel.map((item) => (
        <PackageList key={item.id} information={item} />
    ));
    return (
        <div className="page-container">
            <div className="package-grid">{packageArray}</div>
        </div>
    );
}
