import { songsData } from "../../assets/assets";

export function Sidebar() {
  return (
    <div className="h-full w-[25%] p-5 hidden lg:flex flex-col">

      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">
            Music JP
          </h1>
          <p>Musicas y Postcast</p>
        </div>
        <div className="px-4 py-2 rounded-full flex items-center bg-[#121212]">
          <h1 className="fondo font-bold">Jean Pool</h1>
        </div>
      </div>

      <input type="text" className="w-full border py-3 px-4 rounded-full"
        placeholder="Buscar" />

      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-xl">Recent  <span>(4)</span> </h1>
        </div>
        <p>^</p>
      </div>

      <div className="overflow-y-auto">
        {
          songsData.map((item) => (
            <div key={item.id} className="flex gap-4 items-center hover:bg-[#ffffff2b] 
          p-2 rounded cursor-pointer">
              <img
                className="w-18 h-18 rounded"
                src={item.image}
                alt={item.name} />
              <div>
                <h1 className="text-lg">{item.name}</h1>
                <p className="text-sm">{item.desc.slice(0, 35)}</p>
              </div>
            </div>
          ))
        }
      </div>



    </div>
  );
};