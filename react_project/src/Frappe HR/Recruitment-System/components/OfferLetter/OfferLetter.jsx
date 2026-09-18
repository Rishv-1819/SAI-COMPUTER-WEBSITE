import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./OfferLetter.css";

function OfferLetter() {

    const { state } = useLocation();

    useEffect(() => {

        setTimeout(() => {

            window.print();

        }, 500);

    }, []);

    if (!state) {

        return <h2>No Offer Found</h2>;

    }

    return (

        <div id="offer-letter">

            <h1>

                Offer Letter

            </h1>

            <hr />

            <p>

                Dear <b>{state.name}</b>

            </p>

            <p>

                We are pleased to offer you employment.

            </p>

            <p>

                Annual Package :

                <b>

                    ₹ {state.package_amount}

                </b>

            </p>

            <p>

                Joining Date :

                {state.offer_date}

            </p>

            <p>

                {state.offer_letter}

            </p>

            <br />

            <p>

                Regards

            </p>

            <h3>

                HR Department

            </h3>

        </div>

    )

}

export default OfferLetter;