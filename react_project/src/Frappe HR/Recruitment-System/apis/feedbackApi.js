import api from "../Api/api.js";

export const getFeedbacks = async () => {
    return await api.get("/feedback");
};

export const addFeedback = async (data) => {
    return await api.post("/feedback", data);
};

export const updateFeedback = async (id, data) => {
    return await api.put(`/feedback/${id}`, data);
};

export const deleteFeedback = async (id) => {
    return await api.delete(`/feedback/${id}`);
};