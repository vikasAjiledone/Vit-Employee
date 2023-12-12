import React from "react";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard.jsx";
import { Routes, Route } from "react-router-dom";
import ProjectEstablisment from "./pages/planning/ProjectEstablisment";
import StandardForm from "./pages/planning/StandardForm";
import FinancialSpecification from "./pages/design/FinancialSpecification";
import LabTesting from "./pages/design/LabTesting";
import Proposal from "./pages/design/Proposal";
import TechnicalSpecification from "./pages/design/TechnicalSpecification";
// import ContractDetails from "./pages/PreConstruction/ContractDetails";
import ContractInfo from "./pages/PreConstruction/ContractInfo";
import CostEstimation from "./pages/PreConstruction/CostEstimation";
import MachineryProcurement from "./pages/PreConstruction/MachineryProcurement";
import MaterialProcurement from "./pages/PreConstruction/MaterialProcurement";
import SchemeticDesign from "./pages/PreConstruction/SchemeticDesign";
import ProjectProcessUpdate from "./pages/Construction/ProjectProcessUpdate";
import SiteManagementPlan from "./pages/Construction/SiteManagementPlan.jsx";
import ProjectCompletionDocumentation from "./pages/postconstruction/ProjectCompletionDocumentation";
import AssetsManagement from "./pages/operations/AssetsManagement";
import MaintainanceRecord from "./pages/operations/MaintainanceRecord";
import ProjectEstablishmentView from "./component/ProjectEstablishment/ProjectEstablishmentView.jsx";
import SafetyChecks from "./pages/Construction/SafetyChecks.jsx";
import FinancialSpecificationView from "./component/financialSpecification/FinancialSpecificationView.jsx";
import LabTestingView from "./component/labTesting/LabTestingView.jsx";
import ProposalView from "./component/proposalData/ProposalView.jsx";
import TechnicalSpecificationView from "./component/technicalSpecificationData/TechnicalSpecificationView.jsx";
import ContractorInfoView from "./component/contactInfoData/ContractorInfoView.jsx";
import CostEstimationView from './component/costEstimateData/CostEstimateView.jsx'
import MachineryProcurementView from "./component/machineryProcurementData/MachineryProcurementView.jsx";
import SchemeticDesignView from "./component/schemeticDesignData/SchemeticDesignView.jsx";
import AssetsManagementView from "./component/assestManagement/AssetsManagementView.jsx";
import MaintainanceRecordView from "./component/maintainanceRecordData/MaintainanceRecordView.jsx";
import SiteManagementPlanView from "./component/SiteManagementPlan/SiteManagementPlanView.jsx";
import SafetyChecksView from "./component/safetychecks/SafetyChecksView.jsx";
import ProjectProcessUpdateView from './component/productprocessupdate/ProductProcessUpdateView.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/" element={<SignUp />} />
        <Route
          path="/ProjectCompletionDocumentation"
          element={<ProjectCompletionDocumentation />}
        />
        <Route
          path="/ProjectEstablisment"
          element={<ProjectEstablisment />}
        />
        <Route
          path="/StandardForm"
          element={<StandardForm />}
        />
        <Route
          path="/FinancialSpecification"
          element={<FinancialSpecification />}
        />
        <Route
          path="/LabTesting"
          element={<LabTesting />}
        />
        <Route
          path="/LabTestingView"
          element={<LabTestingView />}
        />
        <Route
          path="/Proposal"
          element={<Proposal />}
        />
        <Route
          path="/ProposalView"
          element={<ProposalView />}
        />
        <Route
          path="/TechnicalSpecification"
          element={<TechnicalSpecification />}
        />
        <Route
          path="/TechnicalSpecificationView"
          element={<TechnicalSpecificationView />}
        />
       
        <Route
          path="/ContractInfo"
          element={<ContractInfo />}
        />
        <Route
          path="/ContractInfoView"
          element={<ContractorInfoView />}
        />
        <Route
          path="/CostEstimation"
          element={<CostEstimation />}
        />
        <Route
          path="/CostEstimationView"
          element={<CostEstimationView />}
        />
        <Route
          path="/MachineryProcurement"
          element={<MachineryProcurement />}
        />
        <Route
          path="/MachineryProcurementView"
          element={<MachineryProcurementView />}
        />
        <Route
          path="/MaterialProcurement"
          element={<MaterialProcurement />}
        />
        <Route
          path="/SchemeticDesign"
          element={<SchemeticDesign />}
        />
        <Route
          path="/SchmeticDesignView"
          element={<SchemeticDesignView />}
        />
        
        <Route
          path="/ProjectProcessUpdate"
          element={<ProjectProcessUpdate />}
        />
        <Route
          path="/ProjectProcessUpdateView"
          element={<ProjectProcessUpdateView />}
        />
        <Route
          path="/SiteManagementPlan"
          element={<SiteManagementPlan />}
        />
        <Route
          path="/SiteManagementPlanView"
          element={<SiteManagementPlanView />}
        />
        <Route
          path="/Safetychecks"
          element={<SafetyChecks />}
        />
        <Route
          path="/SafetychecksView"
          element={<SafetyChecksView />}
        />
        <Route
          path="/AssetsManagement"
          element={<AssetsManagement />}
        />
        <Route
          path="/AssetsManagementView"
          element={<AssetsManagementView />}
        />
        <Route
          path="/MaintainanceRecord"
          element={<MaintainanceRecord />}
        />
        <Route
          path="/MaintainanceRecordView"
          element={<MaintainanceRecordView />}
        />
        <Route
          path="/ProjectEstablishmentView"
          element={<ProjectEstablishmentView />}
        />
        <Route
          path="/FinancialSpecificationView"
          element={<FinancialSpecificationView />}
        />
      </Routes>
    </>
  );
}

export default App;
