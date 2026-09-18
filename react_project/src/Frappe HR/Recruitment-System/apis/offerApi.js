import api from "../Api/api.js";

export const getOffers = async () => {

    return await api.get("/offers");

};

export const addOffer = async (data) => {

    return await api.post("/offers", data);

};

export const updateOffer = async (id, data) => {

    return await api.put(`/offers/${id}`, data);

}

export const deleteOffer = async (id) => {

    return await api.delete(`/offers/${id}`);

}
export const getOfferById = async(id)=>{

return await api.get(`/offers/${id}`);

}