import { useState, useEffect } from "react";
import loder from "../../assets/newsaiwebsiteimage/WhatsApp Video 2026-06-24 at 17.01.43 (1).gif";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import Home from "../home/home.jsx";
import Features from "../pages/Features/Features.jsx";
import About from "../pages/about/about.jsx";
import Services from "../pages/OurServices/Services.jsx";
import Gallery from "../pages/Gallery/Gallery.jsx"
import Contact from "../pages/contact/contact.jsx";
import DistributionFranchisee from "../pages/DistributionFranchisee/DistributionFranchisee.jsx";
import DigitalProducts from "../pages/DigitalProducts/DigitalProducts.jsx";
import UtilityOperations from "../pages/UtilityOperations/UtilityOperations.jsx";
import TripuraStudies from "../pages/tripuracasestudies/callcasestudiesfile.jsx"
import Blogs from "../pages/Blogs/Blogs.jsx";
import UppclMeters from "../pages/uppclmetercasestudies/calluppclfile.jsx";
import PdclMeter from "../pages/Pdclcasestudies/Pdclcallfile.jsx";
import AboutCompanycall from "../pages/about/AboutCompany/AboutCompanycallfile.jsx";
import EnergySolutionscall from "../pages/about/EnergySolutions/EnergySolutionscall.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "../pages/TermsConditions/TermsConditions.jsx";
import { BrowserRouter, Routes,Route } from "react-router-dom";




const MainFile = () => {
  return( 
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/read" element={<DistributionFranchisee/>}/>
        <Route path="/team" element={<DigitalProducts/>}/>
        <Route path="/readmore" element={<UtilityOperations/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/Case1" element={<TripuraStudies/>}/>
        <Route path="/Case2" element={<UppclMeters/>}/>
        <Route path="/Case3" element={<PdclMeter/>}/>
        <Route path="/learndata" element={<AboutCompanycall/>}/>
        <Route path="/aboutmore" element={<EnergySolutionscall/>}/>
         <Route path="/terms" element={<TermsConditions/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default MainFile;
