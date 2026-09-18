import api from "../Api/api.jsx";

export const uploadResume = async (formData) => {

    return await api.post(

        "/upload/resume",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

};