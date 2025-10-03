import { Route, Routes } from "react-router-dom"
import AppointmentParent from "../pages/AppointmentMangmnt/AppointmentParent"
import BillingPaymentParent from "../pages/BillingAndPayment/BillingPaymentParent"
import Dashboard from "../pages/DashBoard/DashboardParent"
import MedicalRecordHistoryParent from "../pages/MedicalRecordsAndHistory/MedicalRecordHistoryParent"

function Navigations() {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/" element={<Dashboard />}/>
            <Route path="/appontment-management" element={<AppointmentParent />} />
            <Route path="/medical-records-history" element={<MedicalRecordHistoryParent />} />
            <Route path="/billing-payment" element={<BillingPaymentParent />} />
        </Routes>
    )
}

export default Navigations