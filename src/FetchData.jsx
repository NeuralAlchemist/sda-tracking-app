// NPM packages
import {useSetRecoilState, useRecoilState} from "recoil";
import {useEffect} from "react";
// Project files
import {userParcelData} from "./states/userParcelData";
import {LocalData} from "./states/LocalData";

export default function FetchData() {
    // Global states
    const [userParcel,setUserParcel] = useRecoilState(userParcelData)
    const setLocalData = useSetRecoilState(LocalData);
    // Constants
    const API_URL = "https://my.api.mockaroo.com/falseorders.json?key=e49e6840";
    // Methods
    useEffect( () => {
        const test = async() => {await fetch(API_URL)
        .then((response) => onFetchSuccess(response.json()))
        .catch((error) => onFetchFail(error))}
    },[setUserParcel, setLocalData])

    function onFetchSuccess(data){
        setUserParcel(data);
        setLocalData("false");
    }

    function onFetchFail(error){
        console.log(`Failed to fetch from ${API_URL}. Local mock data in use. Error:${error}`);
    }
    return null
}
