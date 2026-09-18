import api from "../Api/api.js";

export const applyJob = async (formData) => {
    return await api.post("/apply", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};