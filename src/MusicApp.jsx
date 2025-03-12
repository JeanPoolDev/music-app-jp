import { Sidebar } from "./components/Sidebar";
import { MusicRouter } from "./router/MusicRouter";


export function MusicApp() {
  return (
    <div className="h-screen glass">

      <main className="h-[90%] flex">
        <Sidebar />
        <MusicRouter />
      </main>

      <section className="h-[10%] ">

      </section>

    </div>
  );
};