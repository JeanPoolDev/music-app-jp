import { Play } from "./components/Play";
import { Sidebar } from "./components/Sidebar";
import { useSpotify } from "./hook/useSpotify";
import { MusicRouter } from "./router/MusicRouter";


export function MusicApp() {

  const { audioRef, track } = useSpotify();

  return (
    <div className="h-screen glass">

      <main className="h-[90%] flex">
        <Sidebar />
        <MusicRouter />
      </main>

      <section className="h-[10%]">
        <Play />
      </section>

      <audio ref={audioRef} src={track.file} preload="auto"></audio>



    </div>
  );
};