// NPM packages
import {useSetRecoilState} from "recoil";
import {useEffect} from "react";
// Project files
import {userParcelData} from "./states/userParcelData";
import {LocalData} from "./states/LocalData";

export default function FetchData() {
    // Global states
    const setUserParcel = useSetRecoilState(userParcelData)
    const setLocalData = useSetRecoilState(LocalData);
    // Constants
    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    // Methods
    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => onFetchSuccess(data))
        .catch((error) => onFetchFail(error))
    },[setUserParcel, setLocalData])

    function onFetchSuccess(data){
        setUserParcel(data);
        setLocalData("false");
        console.log("Fetched data from API");
    }

    function onFetchFail(error){
        console.log(`Failed to fetch from ${API_URL}. Local mock data in use. Error:${error}`);
    }
    return null
}
