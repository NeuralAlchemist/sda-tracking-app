
import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";

import { userParcelData } from "../states/userParcelData";
import { confirmAlert } from "react-confirm-alert";


export default function ProfilePage() {
    const [userParcel, setUserParcel] = useRecoilState(userParcelData);
    
    const userName = userParcel[0].user_name;
    const userPhone = userParcel[0].user_phone;
    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    const getData = useCallback(async () => {
        const data = await fetch(
            "https://my.api.mockaroo.com/orders.json?key=e49e6840"
        );
        const json = await data.json();
        setUserParcel(json);
    }, [setUserParcel]);

    useEffect(() => {
        getData();
    }, [getData]);

    

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
