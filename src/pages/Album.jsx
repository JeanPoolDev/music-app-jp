import { useParams } from "react-router";
import { albumsData, songsData } from "../../assets/assets";


export function Album() {

  const { id } = useParams();

  const { image, name, desc } = albumsData[id];

  return (
    <div className="mt-4">
      <h1 className="text-4xl font-bold my-4" >{name}</h1>

      <div className="flex gap-4 h-[500px] ">

        <img src={image} alt={desc} />

        <div className="w-full overflow-y-auto">
          {
            songsData.map(({ name, desc, duration }) => (
              <div className="p-4 hover:bg-[#ffffff2b] flex items-center 
              justify-between cursor-pointer">
                <div>
                  <h1 className="font-semibold text-xl">{name}</h1>
                  <p className="text-sm">{desc}</p>
                </div>
                <p>{duration}</p>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
};