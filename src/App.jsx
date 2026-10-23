import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './App.css'
import { SectionReveal } from './Components/Motion'

// Landing page components
import Headers from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import DAOpartner from './Components/DAOpartner'
import Ecosystem from './Components/Ecosystem'
import Tokonomics from './Components/Tokenomics'
import FAQ from './Components/FAQ'
import Token from './Components/Token'
import Roadmap from './Components/Roadmap'
import Team from './Components/Team'
import ContractAddress from './Components/ContractAddress'
import JoinUs from './Components/JoinUs'
import HanaProtocol from './Components/HanaProtocol'
import VisionMission from './Components/VisionMision'

// Dashboard
import DashboardLayout from './dashboard/components/DashboardLayout'
import Overview from './dashboard/pages/Overview'
import Packages from './dashboard/pages/Packages'
import ROIIncome from './dashboard/pages/ROIIncome'
import LevelIncome from './dashboard/pages/LevelIncome'
import RankIncentives from './dashboard/pages/RankIncentives'
import DAOProgram from './dashboard/pages/DAOProgram'
import BurnDSE from './dashboard/pages/BurnDSE'
import Tokenomics from './dashboard/pages/Tokenomics'
import Withdrawals from './dashboard/pages/Withdrawals'
import Compounding from './dashboard/pages/Compounding'
import Staking from './dashboard/pages/Staking'
import Settings from './dashboard/pages/Settings'
import DSESection from './Components/DSESection'
import HanaStability from './Components/HanaStability'
import DashboardAccessGate from './dashboard/components/DashboardAccessGate'
import AuthPage from './auth/AuthPage'
import TokenEconomics from './Components/TokenEconomics'

// Landing page
function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <SectionReveal className="relative z-[100]"><Headers /></SectionReveal>
        <SectionReveal><Hero /></SectionReveal>
        <SectionReveal><HanaProtocol /></SectionReveal>
        <SectionReveal><AboutUs /></SectionReveal>
        <SectionReveal><VisionMission /></SectionReveal>
        <SectionReveal><DSESection /></SectionReveal>
        <SectionReveal><HanaStability /></SectionReveal>
        <SectionReveal><DAOpartner /></SectionReveal>
        <SectionReveal><TokenEconomics /></SectionReveal>
        <SectionReveal><Token /></SectionReveal>
        <SectionReveal><Tokonomics /></SectionReveal>
        <SectionReveal><Ecosystem /></SectionReveal>
        <SectionReveal><Roadmap /></SectionReveal>
        <SectionReveal><Team /></SectionReveal>
        <SectionReveal><FAQ /></SectionReveal>
        <SectionReveal><ContractAddress /></SectionReveal>
        <SectionReveal><JoinUs /></SectionReveal>
        <SectionReveal><Footer /></SectionReveal>
      </>
    </MotionConfig>
  )
}

function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/register" element={<AuthPage mode="register" />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <DashboardAccessGate>
            <DashboardLayout />
          </DashboardAccessGate>
        }
      >
        <Route index element={<Overview />} />
        <Route path="packages" element={<Packages />} />
        <Route path="roi" element={<ROIIncome />} />
        <Route path="levels" element={<LevelIncome />} />
        <Route path="ranks" element={<RankIncentives />} />
        <Route path="dao" element={<DAOProgram />} />
        <Route path="dse" element={<BurnDSE />} />
        <Route path="tokenomics" element={<Tokenomics />} />
        <Route path="withdrawals" element={<Withdrawals />} />
        <Route path="compounding" element={<Compounding />} />
        <Route path="staking" element={<Staking />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
