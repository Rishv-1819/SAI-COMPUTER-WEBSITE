import api from "../Api/api.js";

// Get all settings
export const getSettings = async () => {
    return await api.get("/settings");
};

// Get single setting
export const getSettingById = async (id) => {
    return await api.get(`/settings/${id}`);
};

// Save/Create settings
export const createSettings = async (settingsData) => {
    return await api.post("/settings", settingsData);
};

// Update settings
export const updateSettings = async (id, settingsData) => {
    return await api.put(`/settings/${id}`, settingsData);
};

// Delete settings
export const deleteSettings = async (id) => {
    return await api.delete(`/settings/${id}`);
};

// Reset settings to default
export const resetSettings = async () => {
    return await api.post("/settings/reset");
};