import { useState } from "react";

import { uploadResume }

from "../../apis/uploadApi.js";

import "./ResumeUpload.css";

function ResumeUpload() {

    const [file, setFile] = useState(null);

    const submit = async () => {

        if (!file) return;

        const formData = new FormData();

        formData.append(

            "resume",

            file

        );

        await uploadResume(formData);

        alert("Resume Uploaded Successfully");

    };

    return (

        <div className="resume-upload">

            <input

                type="file"

                accept=".pdf,.doc,.docx"

                onChange={(e) =>

                    setFile(

                        e.target.files[0]

                    )

                }

            />

            <button

                onClick={submit}

            >

                Upload Resume

            </button>

        </div>

    );

}

export default ResumeUpload;