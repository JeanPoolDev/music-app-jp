import { assets } from "../../assets/assets";

export function Play() {
  return (
    <div className="flex justify-center items-center h-full gap-4">

      <img src={assets.play_icon} className="w-7" />
      <img src={assets.pause_icon} className="w-7" />

      <div className="bg-white w-100">
        <hr className="h-1 bg-green-600 w-[10%] border-none" />
      </div>

    </div>
  );
};