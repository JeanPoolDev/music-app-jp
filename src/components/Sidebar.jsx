export function Sidebar() {
  return (
    <div className="h-full w-[25%] p-5 hidden lg:flex flex-col">

      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">
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
          <h1>Recent  <span>(4)</span> </h1>
        </div>
        <p>^</p>
      </div>

      {
        [1, 2, 3, 4].map((item, index) => (
          <div key={index} className="flex gap-4 items-center hover:bg-[#ffffff2b] p-2 rounded">
            <img
              className="w-18 h-18 rounded"
              src="https://i.pinimg.com/736x/9a/31/16/9a3116733571bb94a1c57220400f747a.jpg"
              alt="imagen" />
            <div>
              <h1 className="text-lg">Titulo musica</h1>
              <p className="text-sm">Subtitle de la musica</p>
            </div>
          </div>
        ))
      }

      <div className="flex justify-between my-4">
        <div>
          <h1>Favorite <span>(4)</span> </h1>
        </div>
        <p>^</p>
      </div>

      <div className="flex justify-between my-4">
        <div>
          <h1>Album  <span>(4)</span> </h1>
        </div>
        <p>^</p>
      </div>

      <div className="flex justify-between my-4">
        <div>
          <h1>Liked  <span>(4)</span> </h1>
        </div>
        <p>^</p>
      </div>

    </div>
  );
};