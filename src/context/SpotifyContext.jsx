import { useRef, useState } from "react";
import { createContext } from "react";
import { songsData } from "../../assets/assets";

export const ContexSpotify = createContext();

export function ProviderSpotify({ children }) {

  const audioRef = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [status, setStatus] = useState(false);
  const [volumen, setVolumen] = useState(8);

  const handleChangeVolumun = (e) => {
    const newVolumen = e.target.value / 10;

    setVolumen(e.target.value);

    if (audioRef.current) {
      audioRef.current.volume = newVolumen;
    }

  }

  const play = () => {
    audioRef.current.play();
    setStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setStatus(false);
  };

  return (
    <ContexSpotify.Provider value={{
      audioRef,
      track,
      play, pause,
      status,
      handleChangeVolumun, volumen
    }} >
      {children}
    </ContexSpotify.Provider>
  )
}