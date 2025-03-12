import { albumsData } from "../../assets/assets";
import { MusicItem } from "../components/MusicItem";

export function HomePage() {
  return (
    <div className="h-full space-y-5">

      <div className="h-[450px] w-full 
      bg-[url('https://i.pinimg.com/736x/dc/2b/6e/dc2b6ee12fe8840480834f8c75db647f.jpg')]
      bg-no-repeat bg-cover rounded-2xl ">

        <div className="flex h-full items-end w-full degradado p-5 rounded-2xl ">
          <div className="w-[40%] space-y-5">

            <div>
              <h1 className="text-4xl font-semibold">Nier Automata</h1>
              <p className="text-sm">Proident incididunt nisi laborum proident. Ea cupidatat minim ad irure. Esse tempor do nostrud nostrud ex aute.Proident incididunt nisi laborum proident. asdasasdadsa sadas</p>
            </div>

            <div className="flex gap-2">
              <button className="px-5 py-2 rounded-full bg-white text-black">
                Buy for S/.150.00
              </button>
              <button className="px-5 py-2 rounded-full bg-[#121212]">
                More details
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-xl">Treding now</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {
            albumsData.map(song => (
              <MusicItem key={song.id} {...song} />
            ))
          }
        </section>

      </div>

    </div>
  );
};