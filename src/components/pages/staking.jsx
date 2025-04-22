import Sidebar from "../common/staking/sidebar";
import Dashboard from "../common/staking/dashboard";

function Staking() {
  return (
    <div id="staking" className="h-screen md:flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Staking;
