import { confirmAlert } from 'react-confirm-alert';
import {useRecoilState} from "recoil";
import {useEffect} from "react";


import {userParcelData} from "../states/userParcelData";
import {tabIndexData} from "../states/tabIndexData";

export default function ProfilePage() {
    const [userParcel, setUserParcelData] = useRecoilState(userParcelData);
    const [tabIndex,setTabIndex] = useRecoilState(tabIndexData);
    
    useEffect(() => {
        console.log(userParcel);
    },[])

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
                Welcome Jhon Doe
                <br />
                You are ready to track your packages
            </p>
            <div className="flex-for-phone-number">
                <p className="profile-phone-number">
                    +46 729478015{" "}
                    <button onClick={deleteModal} id="delete-phone-number">
                        X
                    </button>
                </p>
            </div>
        </div>
    );
}
