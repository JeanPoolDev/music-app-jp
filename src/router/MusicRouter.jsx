import { Navigate, Route, Routes } from "react-router";
import { Navbar } from "../components/Navbar";
import { HomePage } from "../pages/HomePage";
import { RomancePage } from "../pages/RomancePage";
import { ReguetonPage } from "../pages/ReguetonPage";
import { Album } from "../pages/Album";

export function MusicRouter() {
  return (
    <div className="h-full w-full lg:w-[75%] py-5 px-10">
      <Navbar />

      <div className="h-[calc(100%-80px)] overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/romance" element={<RomancePage />} />
          <Route path="/regueton" element={<ReguetonPage />} />
          <Route path="/music/:id" element={<Album />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </div>

    </div>
  );
};