import { useEffect, useState } from "react";

import Package from "../components/Package";
export default function PackageListPage() {
    const [userParcel, setUserParcel] = useState(
        require("../data/orders.json")
    );
    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((json) => {
                setUserParcel(json);
            });
    }, [setUserParcel]);

    const packageArray = userParcel.map((item) => (
        <Package key={item.id} information={item} />
    ));
    console.log(userParcel);
    return (
        <div>
            <div className="package-grid">
                {packageArray}
            </div>
        </div>
    );
}
