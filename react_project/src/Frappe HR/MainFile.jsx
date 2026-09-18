import { BrowserRouter, Routes, Route } from "react-router-dom";

// Website Pages
import Careers from "./Recruitment-System/components/jobcard/companycards.jsx";
import JobDetails from "./Recruitment-System/pages/jobDetails.jsx";
import JobApplication from "./Recruitment-System/pages/jobapplicationform/JobApplicationForm.jsx";

// HR Pages

import Dashboard from "./Recruitment-System/hr/pages/Dashboard/Dashboard.jsx";
import Applicants from "./Recruitment-System/hr/pages/Applicants/Applicants.jsx";
import ApplicantDetails from "./Recruitment-System/hr/pages/ApplicantDetails/ApplicantDetails.jsx";
import Interviews from "./Recruitment-System/hr/pages/Interviews/Interviews.jsx";
import Offers from "./Recruitment-System/hr/pages/Offers/Offers.jsx";
import OfferLetter from "./Recruitment-System/components/OfferLetter/OfferLetter.jsx";

import Requisition from "./Recruitment-System/hr/pages/Requisitions/Requisitions.jsx";
import Staffing from "./Recruitment-System/hr/pages/Staffing/Staffing.jsx";

import Jobs from "./Recruitment-System/components/jobcard/jobs.jsx";
import Notifications from "./Recruitment-System/hr/pages/Notifications/Notifications.jsx";
import Profile from "./Recruitment-System/hr/pages/Profile/Profile.jsx";
import Settings from "./Recruitment-System/hr/pages/Settings/Settings.jsx";
import Feedback from "./Recruitment-System/hr/pages/Feedback/Feedback.jsx";
import Login from "./Recruitment-System/pages/Login/Login.jsx";

// Layout
import AdminLayout from "./Recruitment-System/components/Layout/AdminLayout.jsx";

function MainFile() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Website Routes */}

        <Route path="/" element={<Careers />} />

        <Route path="/career/:id" element={<JobDetails />} />

        <Route path="/JobApplicationForm/:id" element={<JobApplication />} />

        {/* HR Login */}

        <Route path="/hr/login" element={<Login />} />

        {/* HR Dashboard */}

        {/* Applicants */}

        <Route
          path="/hr/applicants"
          element={
            <AdminLayout>
              <Applicants />
            </AdminLayout>
          }
        />

        <Route
          path="/hr/applicants/:id"
          element={
            <AdminLayout>
              <ApplicantDetails />
            </AdminLayout>
          }
        />

        <Route
          path="/hr/interviews"
          element={
            <AdminLayout>
              <Interviews />
            </AdminLayout>
          }
        />

        <Route
          path="/hr/offers"
          element={
            <AdminLayout>
              <Offers />
            </AdminLayout>
          }

        />

        <Route
          path="/hr/offer-letter"
          element={
            <AdminLayout>
              <OfferLetter />
            </AdminLayout>
          }
        />

{/* HR Dashboard */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }

        />


        <Route
          path="/hr/requisitions"
          element={
            <AdminLayout>
              <Requisition />
            </AdminLayout>
          }
        />

        <Route
          path="/hr/staffing"
          element={
            <AdminLayout>
              <Staffing />
            </AdminLayout>
          }
        />

        <Route
          path="/hr/jobs"
          element={
            <AdminLayout>
              <Jobs />
            </AdminLayout>
          }
        />

        <Route
          path="/hr/notifications"
          element={
            <AdminLayout>
              <Notifications />
            </AdminLayout>
          }
        />

        <Route path="/hr/profile" element={<AdminLayout><Profile /></AdminLayout>}/>

        <Route path="/hr/settings"element={<AdminLayout><Settings /></AdminLayout>}/>
        <Route path="/hr/feedback" element={<AdminLayout><Feedback/></AdminLayout>} />
        <Route path="/login" element={<Login />} />
        

      </Routes>

    </BrowserRouter>

  );

}

export default MainFile;