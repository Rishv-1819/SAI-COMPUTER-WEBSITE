import { useEffect, useState } from "react";

import RequisitionForm from "../../../components/Forms/RequisitionForm.jsx";
import RequisitionTable from "../../../components/Tables/RequisitionTable.jsx";

import {

    getRequisitions,
    createRequisition,
    deleteRequisition

} from "../../../apis/requisitionApi.js";

import "./Requisitions.css";

function Requisitions() {

    const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        const res = await getRequisitions();

        setData(res.data);

    }

    const addData = async (form) => {

        await createRequisition(form);

        loadData();

    }

    const deleteData = async (id) => {

        await deleteRequisition(id);

        loadData();

    }

    return (

        <div className="page">

            <h2>

                Job Requisitions

            </h2>

            <RequisitionForm

                onSubmit={addData}

            />

            <RequisitionTable

                data={data}

                onEdit={() => { }}

                onDelete={deleteData}

            />

        </div>

    )

}

export default Requisitions;