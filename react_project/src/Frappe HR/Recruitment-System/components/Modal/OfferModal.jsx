import "./OfferModal.css";

function OfferModal({ open, children, onClose }) {

    if (!open) return null;

    return (

        <div className="offer-modal">

            <div className="offer-modal-box">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✖
                </button>

                {children}

            </div>

        </div>

    );

}

export default OfferModal;