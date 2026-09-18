import "./InterviewModal.css";

function InterviewModal({

    open,

    children,

    onClose

}) {

    if (!open) {

        return null;

    }

    return (

        <div className="modal">

            <div className="modal-box">

                <button
                    className="close-btn"
                    onClick={onClose}
                >

                    X

                </button>

                {children}

            </div>

        </div>

    )

}

export default InterviewModal;