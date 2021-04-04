import {atom} from "recoil";

export const userParcelData = atom({
    key:"userParcelData",
    default:require("../data/orders.json"),
});
