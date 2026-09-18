
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./OfferPdf.css";

function OfferPdf({ offer }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Offer Letter",
  });

  return (
    <div>

      <button className="print-btn" onClick={handlePrint}>
        Download Offer Letter
      </button>

      <div ref={componentRef} className="offer-letter">

        <h1>Offer Letter</h1>

        <p>Date: {offer?.offer_date}</p>

        <p>Dear <strong>{offer?.candidate_name}</strong>,</p>

        <p>
          We are pleased to offer you the position of
          <strong> {offer?.job_title}</strong> at our company.
        </p>

        <p>
          Your annual salary package will be
          <strong> ₹ {offer?.package_amount}</strong>.
        </p>

        <p>
          Your joining date will be communicated separately by the HR Department.
        </p>

        <p>
          Please confirm your acceptance of this offer by signing and returning
          this letter.
        </p>

        <br />

        <h3>Best Regards</h3>

        <p>HR Department</p>

        <p>Recruitment Management System</p>

      </div>

    </div>
  );
}

export default OfferPdf;