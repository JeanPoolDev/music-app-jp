import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../components/Navbar";
import { HomePage } from "../pages/HomePage";
import { RomancePage } from "../pages/RomancePage";
import { ReguetonPage } from "../pages/ReguetonPage";

export function MusicRouter() {
  return (
    <div className="h-full w-full lg:w-[75%] py-5 px-10">
      <Navbar />

      <div className="h-[calc(100%-80px)] overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music/romance" element={<RomancePage />} />
          <Route path="/music/regueton" element={<ReguetonPage />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </div>

    </div>
  );
};