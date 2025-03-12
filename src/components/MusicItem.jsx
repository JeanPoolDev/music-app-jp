export function MusicItem({ title, image, desc }) {
  return (
    <div
      key={title}
      style={{ backgroundImage: `url(${image})` }}
      className={`w-full lg:w-[25%] h-[400px] rounded-2xl bg-cover bg-center`}>
      <div className="h-full items-end flex degradado justify-between p-4 gap-10 rounded-2xl">
        <div className="w-5/6">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="w-1/6">
          <div className="w-12 h-12 rounded-full bg-gray-200">

          </div>
        </div>
      </div>
    </div>
  );
};