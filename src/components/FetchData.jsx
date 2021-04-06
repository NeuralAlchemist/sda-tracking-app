// NPM packages
import { useSetRecoilState, useRecoilState } from "recoil";
import { useEffect } from "react";
// Project files
import { userParcelData } from "../states/userParcelData";
import { LocalData } from "../states/LocalData";

export default function FetchData() {
    // Global states
    const [userParcel, setUserParcel] = useRecoilState(userParcelData);
    const setLocalData = useSetRecoilState(LocalData);
    // Constants
    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    // Methods
    useEffect(() => {
        const test = async () => {
            try {
                const result = await fetch(API_URL);
                console.log("Received data");
                const data = await result.json();
                console.log("Processed received data");
                onFetchSuccess(data);
            } catch(error) {
                onFetchFail(error);
            }
        };
        test();
    }, [setUserParcel, setLocalData]);

    /* useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => onFetchSuccess(data))
            .catch((error) => onFetchFail(error));
    }, [setUserParcel, setLocalData]); */

    function onFetchSuccess(data) {
        console.log("Success fetch");
        setUserParcel(data);
        setLocalData("false");
    }

    function onFetchFail(error) {
        console.error(
            `Failed to fetch from ${API_URL}. Local mock data in use. Error:${error}`
        );
    }
    return null;
}
