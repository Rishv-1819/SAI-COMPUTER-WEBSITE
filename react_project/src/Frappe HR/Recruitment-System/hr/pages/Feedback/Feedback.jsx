import { useEffect, useState } from "react";

import {
  getFeedbacks,
  addFeedback,
  deleteFeedback,
  updateFeedback,
} from "../../../apis/feedbackApi.js";

import FeedbackForm from "../../../components/Forms/FeedbackForm.jsx";
import FeedbackTable from "../../../components/Tables/FeedbackTable.jsx";
import EditFeedbackForm from "../../../components/Forms/EditFeedbackForm.jsx";
import InterviewModal from "../../../components/Modal/InterviewModal.jsx";

import "./Feedback.css";

function Feedback() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    try {
      const res = await getFeedbacks();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (formData) => {
    try {
      await addFeedback(formData);
      loadFeedback();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFeedback(id);
      loadFeedback();
    } catch (err) {
      console.log(err);
    }
  };

  const editFeedback = async (formData) => {
    try {
      await updateFeedback(formData.id, formData);
      setOpen(false);
      loadFeedback();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="feedback-page">

      <h2>Interview Feedback</h2>

      <FeedbackForm onSubmit={handleAdd} />

      <FeedbackTable
        data={data}
        onEdit={(item) => {
          setSelected(item);
          setOpen(true);
        }}
        onDelete={handleDelete}
      />

      <InterviewModal
        open={open}
        onClose={() => setOpen(false)}
      >
        <EditFeedbackForm
          feedback={selected}
          onUpdate={editFeedback}
        />
      </InterviewModal>

    </div>
  );
}

export default Feedback;