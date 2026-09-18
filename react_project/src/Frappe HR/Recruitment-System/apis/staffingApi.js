import api from "../Api/api.js";

// Get all staffing plans
export const getStaffing = async () => {
    return await api.get("/staffing");
};

// Get staffing plan by ID
export const getStaffingById = async (id) => {
    return await api.get(`/staffing/${id}`);
};

// Create staffing plan
export const createStaffing = async (staffingData) => {
    return await api.post("/staffing", staffingData);
};

// Update staffing plan
export const updateStaffing = async (id, staffingData) => {
    return await api.put(`/staffing/${id}`, staffingData);
};

// Delete staffing plan
export const deleteStaffing = async (id) => {
    return await api.delete(`/staffing/${id}`);
};

// Activate staffing plan
export const activateStaffing = async (id) => {
    return await api.put(`/staffing/${id}/activate`);
};

// Close staffing plan
export const closeStaffing = async (id) => {
    return await api.put(`/staffing/${id}/close`);
};