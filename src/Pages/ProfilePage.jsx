// NPM packages
import { useRecoilValue } from "recoil";
import { confirmAlert } from "react-confirm-alert";
// Project files
import { userParcelData } from "../states/userParcelData";
import {LocalData} from "../states/LocalData";

export default function ProfilePage() {
    // Global states
    const userParcel = useRecoilValue(userParcelData);
    const local = useRecoilValue(LocalData);
    // Local states
    let userName = userParcel[0].user_name;
    let userPhone = userParcel[0].user_phone;
    // Methods
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
            <p className="status" data-local={local}>
                using mock-data
            </p>
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
