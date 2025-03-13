import { useContext } from "react"
import { ContexSpotify } from "../context/SpotifyContext";

export function useSpotify() {

  const context = useContext(ContexSpotify);

  if (!context) {
    throw new Error("useSpotify must be used within a ContexSpotifyProvider");
  }

  return context
};