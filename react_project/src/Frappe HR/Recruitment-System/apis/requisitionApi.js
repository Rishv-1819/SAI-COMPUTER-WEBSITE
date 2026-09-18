 import api from "../Api/api.js";

// Get all requisitions
export const getRequisitions = async () => {
    return await api.get("/requisitions");
};

// Get requisition by ID
export const getRequisitionById = async (id) => {
    return await api.get(`/requisitions/${id}`);
};

// Create new requisition
export const createRequisition = async (requisitionData) => {
    return await api.post("/requisitions", requisitionData);
};

// Update requisition
export const updateRequisition = async (id, requisitionData) => {
    return await api.put(`/requisitions/${id}`, requisitionData);
};

// Delete requisition
export const deleteRequisition = async (id) => {
    return await api.delete(`/requisitions/${id}`);
};

// Approve requisition
export const approveRequisition = async (id) => {
    return await api.put(`/requisitions/${id}/approve`);
};

// Reject requisition
export const rejectRequisition = async (id) => {
    return await api.put(`/requisitions/${id}/reject`);
};