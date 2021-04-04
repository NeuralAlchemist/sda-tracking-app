import { useEffect, useState } from "react";

import { confirmAlert } from "react-confirm-alert";

export default function ProfilePage() {
    const [userParcel, setUserParcel] = useState(
        require("../data/orders.json")
    );
    const [local, setLocal] = useState("true");
    let userName = userParcel[0].user_name;
    let userPhone = userParcel[0].user_phone;
    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((json) => {
                setUserParcel(json);
                setLocal("false");
                userName = json[0].user_name;
                userPhone = json[0].user_phone;
            });
    },[setUserParcel, setLocal]);

    function deleteModal() {
        confirmAlert({
            title: `Confirm to delete`,
            message: `Are you sure you want to delete?`,
            buttons: [
                {
                    label: `No`,
                    className: "confirm-no",
                },
            ],
        });
    }
    return (
        <div className="profile-page">
            <p className="status" data-local={local}>using mock-data</p>
            <p className="profile-message">
                Welcome {userName}
                <br />
                You are ready to track your packages
            </p>
            <div className="flex-for-phone-number">
                <p className="profile-phone-number">
                    {userPhone}{" "}
                    <button onClick={deleteModal} id="delete-phone-number">
                        X
                    </button>
                </p>
            </div>
        </div>
    );
}
