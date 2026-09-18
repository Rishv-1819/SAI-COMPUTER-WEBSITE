import api from "../Api/api.js";

;

export const getApplicantById=(id)=>{

return api.get(`/applicants/${id}`);

};

export const updateApplicantStage=(id,stage)=>{

return api.put(`/applicants/${id}`,{

stage

});

};