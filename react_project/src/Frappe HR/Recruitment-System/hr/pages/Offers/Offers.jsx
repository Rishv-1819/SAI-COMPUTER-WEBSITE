import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getOffers,
  addOffer,
  updateOffer,
  deleteOffer,
  getOfferById,
} from "../../../apis/offerApi.js";

import OfferForm from "../../../components/Forms/OfferForm.jsx";
import OfferModal from "../../../components/Modal/OfferModal.jsx";
import EditOfferForm from "../../../components/Forms/EditOfferForm.jsx";
import OfferTable from "../../../components/Tables/OfferTable.jsx";
import OfferPdf from "../../../components/PDF/OfferPDF.jsx";

import { downloadOfferPDF } from "../../utils/downloadOfferPDF.js";

import "./Offers.css";

function Offers() {
  const [data, setData] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadOffers();
  }, []);

  const loadOffers = async () => {
    try {
      const res = await getOffers();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (formData) => {
    try {
      await addOffer(formData);
      loadOffers();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (formData) => {
    try {
      await updateOffer(formData.id, formData);
      setOpen(false);
      loadOffers();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteOffer(id);
      loadOffers();
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrint = async (id) => {
    try {
      const res = await getOfferById(id);

      navigate("/hr/offer-letter", {
        state: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDownload = async (id) => {
    try {
      const res = await getOfferById(id);
      downloadOfferPDF(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="offer-page">

      <h2>Job Offers</h2>

      <OfferForm onSubmit={handleAdd} />

      <OfferTable
        data={data}
        onEdit={(item) => {
          setSelectedOffer(item);
          setOpen(true);
        }}
        onDelete={handleDelete}
        onPrint={handlePrint}
        onDownload={handleDownload}
      />

      <OfferModal
        open={open}
        onClose={() => setOpen(false)}
      >
        <EditOfferForm
          offer={selectedOffer}
          onUpdate={handleEdit}
        />
      </OfferModal>

      {selectedOffer && (
        <OfferPdf offer={selectedOffer} />
      )}

    </div>
  );
}

export default Offers;