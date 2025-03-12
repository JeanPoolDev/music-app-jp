import { MusicItem } from "../components/MusicItem";

const musics = [
  {
    id: 1,
    image: 'https://i.pinimg.com/736x/12/39/bd/1239bd52ed659fbdb6a941bc87d26c53.jpg',
    title: 'Solo Leveling',
    desc: 'Amet nisi cupidatat laborum esse consequat laborum.'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/b0/3a/9a/b03a9ab25a3e9449a6bc4645f97ba213.jpg',
    title: 'Dota 2',
    desc: 'Amet nisi cupidatat laborum esse consequat laborum.'
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/7a/f8/b6/7af8b6af3550184e8043da064c9e4c0c.jpg',
    title: 'Wu Kong',
    desc: 'Amet nisi cupidatat laborum esse consequat laborum.'
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/736x/be/f6/a6/bef6a69578831baa17d74d58684f2c6d.jpg',
    title: 'Fornite',
    desc: 'Amet nisi cupidatat laborum esse consequat laborum.'
  }
]

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

        <div className="flex gap-4 flex-col lg:flex-row">
          {
            musics.map(music => (
              <MusicItem key={music.id} {...music} />
            ))
          }
        </div>

      </div>

    </div>
  );
};