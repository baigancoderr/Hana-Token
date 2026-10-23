import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDisconnect } from "wagmi";
import Sidebar from "./Sidebar";
import SideRays from "./SideRays";
import Topbar from "./Topbar";

const pageTitles = {
  "/dashboard": "Dashboard Overview",
  "/dashboard/packages": "Packages",
  "/dashboard/roi": "ROI & Income",
  "/dashboard/levels": "Level Income",
  "/dashboard/ranks": "Rank Incentives",
  "/dashboard/dao": "DAO Partner Program",
  "/dashboard/dse": "Burn & DSE",
  "/dashboard/tokenomics": "Tokenomics",
  "/dashboard/withdrawals": "Withdrawals",
  "/dashboard/compounding": "Locked Growth Compounding",
  "/dashboard/staking": "Staking",
  "/dashboard/settings": "Settings",
};

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [disconnectError, setDisconnectError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { disconnectAsync } = useDisconnect();
  const mainRef = useRef(null);
  const title = pageTitles[location.pathname] || "Dashboard";

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleLogout = async () => {
    setDisconnectError("");
    try {
      await disconnectAsync();
      navigate("/");
    } catch (error) {
      setDisconnectError(
        error instanceof Error ? error.message : "Could not disconnect wallet.",
      );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black font-chakra-petch">
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:relative lg:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onNavigate={() => setMobileSidebarOpen(false)}
          onLogout={handleLogout}
          logoutError={disconnectError}
        />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar
          pageTitle={title}
          onMenuClick={() => setMobileSidebarOpen(true)}
          onLogout={handleLogout}
          logoutError={disconnectError}
        />

        <main
          ref={mainRef}
          className="dashboard-scroll relative isolate flex-1 overflow-y-auto bg-black p-4 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-0 left-0 right-0 top-[70px] z-0 overflow-hidden sm:left-[35%]"
          >
            <SideRays
              rayColor1="#FFC46B"
              rayColor2="#96c8ff"
              origin="top-right"
              speed={2.5}
              intensity={2}
              spread={3}
              density={5}
              followMouse
              blend={0.6}
              sharpness={0.5}
              tilt={0}
              falloff={1.6}
              glow={1}
              saturation={1}
              dust={0}
              mouseInfluence={0.5}
              intro
              lightMode={false}
              opacity={0.62}
            />
            <SideRays
              rayColor1="#FFC46B"
              rayColor2="#96c8ff"
              origin="top-left"
              speed={2.5}
              intensity={2}
              spread={3}
              density={5}
              followMouse
              blend={0.6}
              sharpness={0.5}
              tilt={0}
              falloff={1.6}
              glow={1}
              saturation={1}
              dust={0}
              mouseInfluence={0.5}
              intro
              lightMode={false}
              opacity={0.62}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          </div>

          <div className="relative z-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
