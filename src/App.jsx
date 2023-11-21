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
import ContractDetails from "./pages/PreConstruction/ContractDetails";
import ContractInfo from "./pages/PreConstruction/ContractInfo";
import CostEstimation from "./pages/PreConstruction/CostEstimation";
import MachineryProcurement from "./pages/PreConstruction/MachineryProcurement";
import MaterialProcurement from "./pages/PreConstruction/MaterialProcurement";
import SchemeticDesign from "./pages/PreConstruction/SchemeticDesign";
import InventoryStatus from "./pages/Construction/InventoryStatus";
import ProjectProcessUpdate from "./pages/Construction/ProjectProcessUpdate";
import SiteManagementPlan from "./pages/Construction/SiteManagementPlan";
import ProjectCompletionDocumentation from "./pages/postconstruction/ProjectCompletionDocumentation";
import AssetsManagement from "./pages/operations/AssetsManagement";
import MaintainanceRecord from "./pages/operations/MaintainanceRecord";
import ProjectEstablishmentView from "./component/ProjectEstablishment/ProjectEstablishmentView.jsx";


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
          path="/Proposal"
          element={<Proposal />}
        />
        <Route
          path="/TechnicalSpecification"
          element={<TechnicalSpecification />}
        />
        <Route
          path="/ContractDetails"
          element={<ContractDetails />}
        />
        <Route
          path="/ContractInfo"
          element={<ContractInfo />}
        />
        <Route
          path="/CostEstimation"
          element={<CostEstimation />}
        />
        <Route
          path="/MachineryProcurement"
          element={<MachineryProcurement />}
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
          path="/InventoryStatus"
          element={<InventoryStatus />}
        />
        <Route
          path="/ProjectProcessUpdate"
          element={<ProjectProcessUpdate />}
        />
        <Route
          path="/SiteManagementPlan"
          element={<SiteManagementPlan />}
        />
        <Route
          path="/AssetsManagement"
          element={<AssetsManagement />}
        />
        <Route
          path="/MaintainanceRecord"
          element={<MaintainanceRecord />}
        />
        <Route
          path="/ProjectEstablishmentView"
          element={<ProjectEstablishmentView />}
        />
      </Routes>
    </>
  );
}

export default App;
