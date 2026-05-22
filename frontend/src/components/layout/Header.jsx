import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="glass-card h-[80px] flex items-center justify-between px-6">
      
      <div>
        <h2 className="text-2xl font-bold">
          AI Operations Dashboard
        </h2>

        <p className="text-gray-400 text-sm">
          Real-time enterprise forecasting intelligence
        </p>
      </div>

      <div className="flex items-center gap-5">
        
        <button className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20">
          <FaBell className="text-cyan-400" />
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-cyan-400" />

          <div>
            <p className="font-semibold">
              Admin User
            </p>

            <p className="text-sm text-gray-400">
              Super Admin
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}