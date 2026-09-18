import "./OfferStatus.css";

function OfferStatus({ status }) {

    return (

        <span className={`offer-status ${status}`}>

            {status}

        </span>

    );

}

export default OfferStatus;