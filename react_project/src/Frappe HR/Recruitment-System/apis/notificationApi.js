import api from "../Api/api.js";

export const sendOfferMail = async (data) => {

    return await api.post(

        "/notifications/offer",

        data

    );

}