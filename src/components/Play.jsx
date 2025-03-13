import { assets } from "../../assets/assets";
import { useSpotify } from "../hook/useSpotify";

export function Play() {

  const { play, pause, status, volumen, handleChangeVolumun } = useSpotify();

  return (
    <div className="flex justify-evenly items-center h-full gap-4">

      <div className="flex gap-4 items-center" >
        {
          status
            ? <img onClick={pause} src={assets.pause_icon} className="w-7" />
            : <img onClick={play} src={assets.play_icon} className="w-7" />
        }

        <div className="bg-white w-100">
          <hr className="h-1 bg-green-600 w-[10%] border-none" />
        </div>
      </div>

      <div className="flex gap-4 items-center" >
        <img src={assets.volume_icon} className="w-5" />

        <input
          type="range"
          value={volumen}
          onChange={handleChangeVolumun}
          min={0}
          max={10}
        />
        <p>{volumen}</p>
      </div>

    </div>
  );
};