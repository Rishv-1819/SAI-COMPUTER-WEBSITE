import api from "../Api/api.js";

export const getDashboardData = async () => {

    return await api.get("/dashboard");

};