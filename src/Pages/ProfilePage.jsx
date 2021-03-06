import { useRecoilValue } from "recoil";
import { confirmAlert } from "react-confirm-alert";
import { userParcelData } from "../states/userParcelData";
import { LocalData } from "../states/LocalData";
export default function ProfilePage() {
    const userParcel = useRecoilValue(userParcelData);
    const local = useRecoilValue(LocalData);
    let userName = userParcel[0].user_name;
    let userPhone = userParcel[0].user_phone;
    function deleteModal() {
        confirmAlert({
            title: `Confirm to delete`,
            message: `Are you sure you want to delete ${userPhone}?`,
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
            <div className="grid-for-phone-number">
                <div className="grid-phone-details">
                    <p className="profile-phone-number">
                        {userPhone}{" "}
                        <button onClick={deleteModal} id="delete-phone-number">
                            X
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
