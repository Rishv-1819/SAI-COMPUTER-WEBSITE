//import Header from "../../components/header.jsx";
//import Footer from "../../components/footer.jsx";
import ContactFront from "./route/front.jsx"
import Location from "./route/location.jsx"
import EnquiryForm from "./route/EnquiryForm.jsx"
function Contact() {
    return (
        <div>
            <ContactFront/>
            <Location/>
            <EnquiryForm/>
        </div>
    )
}
export default Contact;