import { useEffect, useState } from "react";

import ApplicantTable from "../../../components/Tables/ApplicantTable.jsx";
import Loader from "../../../components/Layout/Loader.jsx";
import SearchBar from "../Search/SearchBar.jsx";
import Filter from "../Filter/Filter.jsx";

import { getApplicants, deleteApplicant } from "../../../apis/applicantApi.js";

import "./Applicants.css";

function Applicants() {

    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [stage, setStage] = useState("");

    useEffect(() => {
        loadApplicants();
    }, [search, stage]);

    const loadApplicants = async () => {

        try {

            const res = await getApplicants(search, stage);

            setApplicants(res.data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    const handleEdit = (applicant) => {
        console.log("Edit Applicant :", applicant);
    };
    const handleDelete = async (id) => {
        try {
            await deleteApplicant(id);
            loadApplicants();
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) {

        return <Loader />;

    }

    return (

        <div className="applicants-page">

            <h2>Applicants</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                }}
            >

                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Filter
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                />

            </div>

            <ApplicantTable
                data={applicants}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </div>

    );

}

export default Applicants;