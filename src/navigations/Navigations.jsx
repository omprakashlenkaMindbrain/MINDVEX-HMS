import { Route, Routes } from "react-router-dom"
import AppointmentParent from "../pages/AppointmentMangmnt/AppointmentParent"
import BillingPaymentParent from "../pages/BillingAndPayment/BillingPaymentParent"
import CommunicationParent from "../pages/Communication/CommunicationParent"
import Dashboard from "../pages/DashBoard/DashboardParent"
import MedicalRecordHistoryParent from "../pages/MedicalRecordsAndHistory/MedicalRecordHistoryParent"
import TestResultsReportsParent from "../pages/TestresultsReports/TestResultsReportsParent"

function Navigations() {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/" element={<Dashboard />}/>
            <Route path="/appontment-management" element={<AppointmentParent />} />
            <Route path="/medical-records-history" element={<MedicalRecordHistoryParent />} />
            <Route path="/billing-payment" element={<BillingPaymentParent />} />
            <Route path="/testresults-reports" element={<TestResultsReportsParent />} />
            <Route path="/communication" element={<CommunicationParent />} />
        </Routes>
    )
}

export default Navigations