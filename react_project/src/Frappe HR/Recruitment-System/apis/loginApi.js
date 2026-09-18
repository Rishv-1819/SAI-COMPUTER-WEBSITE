import api from "../Api/api.js";

export const loginHR = async (loginData) => {
    return await api.post("/auth/login", loginData);
};