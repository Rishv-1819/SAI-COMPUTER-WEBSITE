import api from "../Api/api.js";

export const getApplicants = (search = "", stage = "") =>
    api.get(`/applicants?search=${search}&stage=${stage}`);

export const createApplicant = (data) =>
    api.post("/applicants", data);

export const deleteApplicant = (id) =>
    api.delete(`/applicants/${id}`);

export const updateStage = (id, stage) =>
    api.put(`/applicants/${id}`, { stage });
