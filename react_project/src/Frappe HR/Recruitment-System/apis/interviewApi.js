import api from "../Api/api.js";

export const getInterviews = async () => {
    return await api.get("/interviews");
};

export const scheduleInterview = async (data) => {
    return await api.post("/interviews", data);
};

export const updateInterview = async (id, data) => {
    return await api.put(`/interviews/${id}`, data);
};

export const deleteInterview = async (id) => {
    return await api.delete(`/interviews/${id}`);
};

