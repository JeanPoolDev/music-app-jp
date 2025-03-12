import { Link } from "react-router";

export function MusicItem({ id, name, image, desc }) {
  return (
    <Link
      to={`/music/${id}`}
      className="p-2 bg-[#121212] flex flex-col hover:bg-[#ffffff2b]">
      <img src={image} alt={name} className="rounded mb-2" />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-sm">{desc}</p>
    </Link>
  );
};