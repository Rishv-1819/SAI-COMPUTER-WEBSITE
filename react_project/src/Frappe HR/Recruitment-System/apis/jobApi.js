import api from "../Api/api.js";

// Get All Jobs
export const getJobs = () => api.get("/jobs");

// Get Single Job
export const getJobById = (id) =>
  api.get(`/jobs/${id}`);

// Create Job
export const createJob = (data) =>
  api.post("/jobs", data);

// Update Job
export const updateJob = (id, data) =>
  api.put(`/jobs/${id}`, data);

// Delete Job
export const deleteJob = (id) =>
  api.delete(`/jobs/${id}`);

// Publish Job
export const publishJob = (id) =>
  api.put(`/jobs/${id}/publish`);

// Close Job
export const closeJob = (id) =>
  api.put(`/jobs/${id}/close`);