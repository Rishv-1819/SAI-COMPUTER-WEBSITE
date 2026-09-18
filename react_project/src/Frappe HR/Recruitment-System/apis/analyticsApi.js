import api from "../Api/api.js";

export const getAnalytics = async () => {

    return await api.get("/analytics");

};