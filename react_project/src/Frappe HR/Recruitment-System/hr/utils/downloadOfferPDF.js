import jsPDF from "jspdf";

export const downloadOfferPDF = (offer) => {

    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("Offer Letter", 70, 20);

    pdf.setFontSize(12);

    pdf.text(
        `Candidate : ${offer.full_name}`,
        20,
        40
    );

    pdf.text(
        `Package : ${offer.package_amount}`,
        20,
        50
    );

    pdf.text(
        `Joining : ${offer.offer_date}`,
        20,
        60
    );

    pdf.text(
        offer.offer_letter,
        20,
        80
    );

    pdf.save(`${offer.full_name}_OfferLetter.pdf`);
};