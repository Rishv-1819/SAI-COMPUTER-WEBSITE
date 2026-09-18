import api from "../Api/api.js";

export const getProfile = async () => {

    return await api.get("/profile");

};