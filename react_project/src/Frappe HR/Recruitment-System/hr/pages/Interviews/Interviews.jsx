import { useEffect, useState } from "react";

import {
  getInterviews,
  scheduleInterview,
  deleteInterview,
  updateInterview,
} from "../../../apis/interviewApi";

import InterviewTable from "../../../components/Tables/InterviewTable.jsx";
import InterviewModal from "../../../components/Modal/InterviewModal.jsx";
import EditInterviewForm from "../../../components/Forms/EditInterviewForm.jsx";

import "./Interviews.css";

function Interviews() {
  const [data, setData] = useState([]);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    loadInterviews();
  }, []);

  const loadInterviews = async () => {
    try {
      const res = await getInterviews();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const editInterview = async (formData) => {
    try {
      await updateInterview(formData.id, formData);
      setEditOpen(false);
      loadInterviews();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInterview(id);
      loadInterviews();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="interview-page">

      <div className="top-bar">

        <h2>Scheduled Interviews</h2>

      </div>

      <InterviewTable
        data={data}
        onEdit={(item) => {
          setSelectedInterview(item);
          setEditOpen(true);
        }}
        onDelete={handleDelete}
      />

      <InterviewModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
      >
        <EditInterviewForm
          interview={selectedInterview}
          onUpdate={editInterview}
        />
      </InterviewModal>

    </div>
  );
}

export default Interviews;